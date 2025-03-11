"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./VDataTable.sass");
const VData_1 = require("../VData");
const VDataIterator_1 = require("../VDataIterator");
const VBtn_1 = __importDefault(require("../VBtn"));
const VDataTableHeader_1 = __importDefault(require("./VDataTableHeader"));
const VIcon_1 = __importDefault(require("../VIcon"));
const Row_1 = __importDefault(require("./Row"));
const RowGroup_1 = __importDefault(require("./RowGroup"));
const VSimpleCheckbox_1 = __importDefault(require("../VCheckbox/VSimpleCheckbox"));
const VSimpleTable_1 = __importDefault(require("./VSimpleTable"));
const MobileRow_1 = __importDefault(require("./MobileRow"));
const loadable_1 = __importDefault(require("../../mixins/loadable"));
const mouse_1 = __importDefault(require("../../mixins/mouse"));
const ripple_1 = __importDefault(require("../../directives/ripple"));
const mixins_1 = __importDefault(require("../../util/mixins"));
const helpers_1 = require("../../util/helpers");
const console_1 = require("../../util/console");
const mergeData_1 = require("../../util/mergeData");
function filterFn(item, search, filter) {
    return (header) => {
        const value = (0, helpers_1.getObjectValueByPath)(item, header.value);
        return header.filter ? header.filter(value, search, item) : filter(value, search, item);
    };
}
function searchTableItems(items, search, headersWithCustomFilters, headersWithoutCustomFilters, customFilter, filterMode) {
    search = typeof search === 'string' ? search.trim() : null;
    if (filterMode === 'union') {
        if (!(search && headersWithoutCustomFilters.length) && !headersWithCustomFilters.length)
            return items;
        return items.filter(item => {
            if (headersWithCustomFilters.length && headersWithCustomFilters.every(filterFn(item, search, helpers_1.defaultFilter))) {
                return true;
            }
            return (search && headersWithoutCustomFilters.some(filterFn(item, search, customFilter)));
        });
    }
    else if (filterMode === 'intersection') {
        return items.filter(item => {
            const matchesColumnFilters = headersWithCustomFilters.every(filterFn(item, search, helpers_1.defaultFilter));
            const matchesSearchTerm = !search || headersWithoutCustomFilters.some(filterFn(item, search, customFilter));
            return matchesColumnFilters && matchesSearchTerm;
        });
    }
    else {
        return items;
    }
}
exports.default = (0, mixins_1.default)(VDataIterator_1.VDataIterator, loadable_1.default, mouse_1.default).extend({
    name: 'v-data-table',
    directives: {
        ripple: ripple_1.default,
    },
    props: {
        headers: {
            type: Array,
            default: () => [],
        },
        showSelect: Boolean,
        checkboxColor: String,
        showExpand: Boolean,
        showGroupBy: Boolean,
        height: [Number, String],
        hideDefaultHeader: Boolean,
        caption: String,
        dense: Boolean,
        headerProps: Object,
        calculateWidths: Boolean,
        fixedHeader: Boolean,
        headersLength: Number,
        expandIcon: {
            type: String,
            default: '$expand',
        },
        customFilter: {
            type: Function,
            default: helpers_1.defaultFilter,
        },
        filterMode: {
            type: String,
            default: 'intersection',
        },
        itemClass: {
            type: [String, Function],
            default: () => '',
        },
        itemStyle: {
            type: [String, Function],
            default: () => '',
        },
        loaderHeight: {
            type: [Number, String],
            default: 4,
        },
    },
    data() {
        return {
            internalGroupBy: [],
            openCache: {},
            widths: [],
        };
    },
    computed: {
        computedHeaders() {
            if (!this.headers)
                return [];
            const headers = this.headers.filter(h => h.value === undefined || !this.internalGroupBy.find(v => v === h.value));
            const defaultHeader = { text: '', sortable: false, width: '1px' };
            if (this.showSelect) {
                const index = headers.findIndex(h => h.value === 'data-table-select');
                if (index < 0)
                    headers.unshift(Object.assign(Object.assign({}, defaultHeader), { value: 'data-table-select' }));
                else
                    headers.splice(index, 1, Object.assign(Object.assign({}, defaultHeader), headers[index]));
            }
            if (this.showExpand) {
                const index = headers.findIndex(h => h.value === 'data-table-expand');
                if (index < 0)
                    headers.unshift(Object.assign(Object.assign({}, defaultHeader), { value: 'data-table-expand' }));
                else
                    headers.splice(index, 1, Object.assign(Object.assign({}, defaultHeader), headers[index]));
            }
            return headers;
        },
        colspanAttrs() {
            return this.isMobile ? undefined : {
                colspan: this.headersLength || this.computedHeaders.length,
            };
        },
        columnSorters() {
            return this.computedHeaders.reduce((acc, header) => {
                if (header.sort)
                    acc[header.value] = header.sort;
                return acc;
            }, {});
        },
        headersWithCustomFilters() {
            return this.headers.filter(header => header.filter && (!header.hasOwnProperty('filterable') || header.filterable === true));
        },
        headersWithoutCustomFilters() {
            return this.headers.filter(header => !header.filter && (!header.hasOwnProperty('filterable') || header.filterable === true));
        },
        sanitizedHeaderProps() {
            return (0, helpers_1.camelizeObjectKeys)(this.headerProps);
        },
        computedItemsPerPage() {
            const itemsPerPage = this.options && this.options.itemsPerPage ? this.options.itemsPerPage : this.itemsPerPage;
            const itemsPerPageOptions = this.sanitizedFooterProps.itemsPerPageOptions;
            if (itemsPerPageOptions &&
                !itemsPerPageOptions.find(item => typeof item === 'number' ? item === itemsPerPage : item.value === itemsPerPage)) {
                const firstOption = itemsPerPageOptions[0];
                return typeof firstOption === 'object' ? firstOption.value : firstOption;
            }
            return itemsPerPage;
        },
        groupByText() {
            var _a, _b, _c;
            return (_c = (_b = (_a = this.headers) === null || _a === void 0 ? void 0 : _a.find(header => { var _a; return header.value === ((_a = this.internalGroupBy) === null || _a === void 0 ? void 0 : _a[0]); })) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : '';
        },
    },
    created() {
        const breakingProps = [
            ['sort-icon', 'header-props.sort-icon'],
            ['hide-headers', 'hide-default-header'],
            ['select-all', 'show-select'],
        ];
        breakingProps.forEach(([original, replacement]) => {
            if (this.$attrs.hasOwnProperty(original))
                (0, console_1.breaking)(original, replacement, this);
        });
    },
    mounted() {
        if (this.calculateWidths) {
            window.addEventListener('resize', this.calcWidths);
            this.calcWidths();
        }
    },
    beforeDestroy() {
        if (this.calculateWidths) {
            window.removeEventListener('resize', this.calcWidths);
        }
    },
    methods: {
        calcWidths() {
            this.widths = Array.from(this.$el.querySelectorAll('th')).map(e => e.clientWidth);
        },
        customFilterWithColumns(items, search) {
            return searchTableItems(items, search, this.headersWithCustomFilters, this.headersWithoutCustomFilters, this.customFilter, this.filterMode);
        },
        customSortWithHeaders(items, sortBy, sortDesc, locale) {
            return this.customSort(items, sortBy, sortDesc, locale, this.columnSorters);
        },
        createItemProps(item, index) {
            const data = Object.assign(Object.assign({}, VDataIterator_1.VDataIterator.options.methods.createItemProps.call(this, item, index)), { headers: this.computedHeaders });
            return Object.assign(Object.assign({}, data), { attrs: {
                    class: {
                        'v-data-table__selected': data.isSelected,
                    },
                }, on: Object.assign(Object.assign({}, this.getDefaultMouseEventHandlers(':row', () => data, true)), { click: (event) => this.$emit('click:row', item, data, event) }) });
        },
        genCaption(props) {
            if (this.caption)
                return [this.$createElement('caption', [this.caption])];
            return (0, helpers_1.getSlot)(this, 'caption', props, true);
        },
        genColgroup(props) {
            return this.$createElement('colgroup', this.computedHeaders.map(header => {
                return this.$createElement('col', {
                    class: {
                        divider: header.divider,
                    },
                });
            }));
        },
        genLoading() {
            const th = this.$createElement('th', {
                staticClass: 'column',
                attrs: this.colspanAttrs,
            }, [this.genProgress()]);
            const tr = this.$createElement('tr', {
                staticClass: 'v-data-table__progress',
            }, [th]);
            return this.$createElement('thead', [tr]);
        },
        genHeaders(props) {
            const data = {
                props: Object.assign(Object.assign({}, this.sanitizedHeaderProps), { headers: this.computedHeaders, options: props.options, mobile: this.isMobile, showGroupBy: this.showGroupBy, checkboxColor: this.checkboxColor, someItems: this.someItems, everyItem: this.everyItem, singleSelect: this.singleSelect, disableSort: this.disableSort }),
                on: {
                    sort: props.sort,
                    group: props.group,
                    'toggle-select-all': this.toggleSelectAll,
                },
            };
            const children = [(0, helpers_1.getSlot)(this, 'header', Object.assign(Object.assign({}, data), { isMobile: this.isMobile }))];
            if (!this.hideDefaultHeader) {
                const scopedSlots = (0, helpers_1.getPrefixedScopedSlots)('header.', this.$scopedSlots);
                children.push(this.$createElement(VDataTableHeader_1.default, Object.assign(Object.assign({}, data), { scopedSlots })));
            }
            if (this.loading)
                children.push(this.genLoading());
            return children;
        },
        genEmptyWrapper(content) {
            return this.$createElement('tr', {
                staticClass: 'v-data-table__empty-wrapper',
            }, [
                this.$createElement('td', {
                    attrs: this.colspanAttrs,
                }, content),
            ]);
        },
        genItems(items, props) {
            const empty = this.genEmpty(props.originalItemsLength, props.pagination.itemsLength);
            if (empty)
                return [empty];
            return props.groupedItems
                ? this.genGroupedRows(props.groupedItems, props)
                : this.genRows(items, props);
        },
        genGroupedRows(groupedItems, props) {
            return groupedItems.map(group => {
                if (!this.openCache.hasOwnProperty(group.name))
                    this.$set(this.openCache, group.name, true);
                if (this.$scopedSlots.group) {
                    return this.$scopedSlots.group({
                        group: group.name,
                        options: props.options,
                        isMobile: this.isMobile,
                        items: group.items,
                        headers: this.computedHeaders,
                    });
                }
                else {
                    return this.genDefaultGroupedRow(group.name, group.items, props);
                }
            });
        },
        genDefaultGroupedRow(group, items, props) {
            const isOpen = !!this.openCache[group];
            const children = [
                this.$createElement('template', { slot: 'row.content' }, this.genRows(items, props)),
            ];
            const toggleFn = () => this.$set(this.openCache, group, !this.openCache[group]);
            const removeFn = () => props.updateOptions({ groupBy: [], groupDesc: [] });
            if (this.$scopedSlots['group.header']) {
                children.unshift(this.$createElement('template', { slot: 'column.header' }, [
                    this.$scopedSlots['group.header']({
                        group,
                        groupBy: props.options.groupBy,
                        isMobile: this.isMobile,
                        items,
                        headers: this.computedHeaders,
                        isOpen,
                        toggle: toggleFn,
                        remove: removeFn,
                    }),
                ]));
            }
            else {
                const toggle = this.$createElement(VBtn_1.default, {
                    staticClass: 'ma-0',
                    props: {
                        icon: true,
                        small: true,
                    },
                    on: {
                        click: toggleFn,
                    },
                }, [this.$createElement(VIcon_1.default, [isOpen ? '$minus' : '$plus'])]);
                const remove = this.$createElement(VBtn_1.default, {
                    staticClass: 'ma-0',
                    props: {
                        icon: true,
                        small: true,
                    },
                    on: {
                        click: removeFn,
                    },
                }, [this.$createElement(VIcon_1.default, ['$close'])]);
                const column = this.$createElement('td', {
                    staticClass: 'text-start',
                    attrs: this.colspanAttrs,
                }, [toggle, `${this.groupByText}: ${group}`, remove]);
                children.unshift(this.$createElement('template', { slot: 'column.header' }, [column]));
            }
            if (this.$scopedSlots['group.summary']) {
                children.push(this.$createElement('template', { slot: 'column.summary' }, [
                    this.$scopedSlots['group.summary']({
                        group,
                        groupBy: props.options.groupBy,
                        isMobile: this.isMobile,
                        items,
                        headers: this.computedHeaders,
                        isOpen,
                        toggle: toggleFn,
                    }),
                ]));
            }
            return this.$createElement(RowGroup_1.default, {
                key: group,
                props: {
                    value: isOpen,
                },
            }, children);
        },
        genRows(items, props) {
            return this.$scopedSlots.item ? this.genScopedRows(items, props) : this.genDefaultRows(items, props);
        },
        genScopedRows(items, props) {
            const rows = [];
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                rows.push(this.$scopedSlots.item(Object.assign(Object.assign({}, this.createItemProps(item, i)), { isMobile: this.isMobile })));
                if (this.isExpanded(item)) {
                    rows.push(this.$scopedSlots['expanded-item']({
                        headers: this.computedHeaders,
                        isMobile: this.isMobile,
                        index: i,
                        item,
                    }));
                }
            }
            return rows;
        },
        genDefaultRows(items, props) {
            return this.$scopedSlots['expanded-item']
                ? items.map((item, index) => this.genDefaultExpandedRow(item, index))
                : items.map((item, index) => this.genDefaultSimpleRow(item, index));
        },
        genDefaultExpandedRow(item, index) {
            const isExpanded = this.isExpanded(item);
            const classes = {
                'v-data-table__expanded v-data-table__expanded__row': isExpanded,
            };
            const headerRow = this.genDefaultSimpleRow(item, index, classes);
            const expandedRow = this.$createElement('tr', {
                staticClass: 'v-data-table__expanded v-data-table__expanded__content',
            }, [this.$scopedSlots['expanded-item']({
                    headers: this.computedHeaders,
                    isMobile: this.isMobile,
                    item,
                })]);
            return this.$createElement(RowGroup_1.default, {
                props: {
                    value: isExpanded,
                },
            }, [
                this.$createElement('template', { slot: 'row.header' }, [headerRow]),
                this.$createElement('template', { slot: 'row.content' }, [expandedRow]),
            ]);
        },
        genDefaultSimpleRow(item, index, classes = {}) {
            const scopedSlots = (0, helpers_1.getPrefixedScopedSlots)('item.', this.$scopedSlots);
            const data = this.createItemProps(item, index);
            if (this.showSelect) {
                const slot = scopedSlots['data-table-select'];
                scopedSlots['data-table-select'] = slot ? () => slot(Object.assign(Object.assign({}, data), { isMobile: this.isMobile })) : () => {
                    var _a;
                    return this.$createElement(VSimpleCheckbox_1.default, {
                        staticClass: 'v-data-table__checkbox',
                        props: {
                            value: data.isSelected,
                            disabled: !this.isSelectable(item),
                            color: (_a = this.checkboxColor) !== null && _a !== void 0 ? _a : '',
                        },
                        on: {
                            input: (val) => data.select(val),
                        },
                    });
                };
            }
            if (this.showExpand) {
                const slot = scopedSlots['data-table-expand'];
                scopedSlots['data-table-expand'] = slot ? () => slot(data) : () => this.$createElement(VIcon_1.default, {
                    staticClass: 'v-data-table__expand-icon',
                    class: {
                        'v-data-table__expand-icon--active': data.isExpanded,
                    },
                    on: {
                        click: (e) => {
                            e.stopPropagation();
                            data.expand(!data.isExpanded);
                        },
                    },
                }, [this.expandIcon]);
            }
            return this.$createElement(this.isMobile ? MobileRow_1.default : Row_1.default, {
                key: (0, helpers_1.getObjectValueByPath)(item, this.itemKey),
                class: (0, mergeData_1.mergeClasses)(Object.assign(Object.assign({}, classes), { 'v-data-table__selected': data.isSelected }), (0, helpers_1.getPropertyFromItem)(item, this.itemClass)),
                style: (0, mergeData_1.mergeStyles)({}, (0, helpers_1.getPropertyFromItem)(item, this.itemStyle)),
                props: {
                    headers: this.computedHeaders,
                    hideDefaultHeader: this.hideDefaultHeader,
                    index,
                    item,
                    rtl: this.$vuetify.rtl,
                },
                scopedSlots,
                on: data.on,
            });
        },
        genBody(props) {
            const data = Object.assign(Object.assign({}, props), { expand: this.expand, headers: this.computedHeaders, isExpanded: this.isExpanded, isMobile: this.isMobile, isSelected: this.isSelected, select: this.select });
            if (this.$scopedSlots.body) {
                return this.$scopedSlots.body(data);
            }
            return this.$createElement('tbody', [
                (0, helpers_1.getSlot)(this, 'body.prepend', data, true),
                this.genItems(props.items, props),
                (0, helpers_1.getSlot)(this, 'body.append', data, true),
            ]);
        },
        genFoot(props) {
            var _a, _b;
            return (_b = (_a = this.$scopedSlots).foot) === null || _b === void 0 ? void 0 : _b.call(_a, props);
        },
        genFooters(props) {
            const data = {
                props: Object.assign({ options: props.options, pagination: props.pagination, itemsPerPageText: '$vuetify.dataTable.itemsPerPageText' }, this.sanitizedFooterProps),
                on: {
                    'update:options': (value) => props.updateOptions(value),
                },
                widths: this.widths,
                headers: this.computedHeaders,
            };
            const children = [
                (0, helpers_1.getSlot)(this, 'footer', data, true),
            ];
            if (!this.hideDefaultFooter) {
                children.push(this.$createElement(VDataIterator_1.VDataFooter, Object.assign(Object.assign({}, data), { scopedSlots: (0, helpers_1.getPrefixedScopedSlots)('footer.', this.$scopedSlots) })));
            }
            return children;
        },
        genDefaultScopedSlot(props) {
            const simpleProps = {
                height: this.height,
                fixedHeader: this.fixedHeader,
                dense: this.dense,
            };
            return this.$createElement(VSimpleTable_1.default, {
                props: simpleProps,
                class: {
                    'v-data-table--mobile': this.isMobile,
                    'v-data-table--selectable': this.showSelect,
                },
            }, [
                this.proxySlot('top', (0, helpers_1.getSlot)(this, 'top', Object.assign(Object.assign({}, props), { isMobile: this.isMobile }), true)),
                this.genCaption(props),
                this.genColgroup(props),
                this.genHeaders(props),
                this.genBody(props),
                this.genFoot(props),
                this.proxySlot('bottom', this.genFooters(props)),
            ]);
        },
        proxySlot(slot, content) {
            return this.$createElement('template', { slot }, content);
        },
    },
    render() {
        return this.$createElement(VData_1.VData, {
            props: Object.assign(Object.assign({}, this.$props), { customFilter: this.customFilterWithColumns, customSort: this.customSortWithHeaders, itemsPerPage: this.computedItemsPerPage }),
            on: {
                'update:options': (v, old) => {
                    this.internalGroupBy = v.groupBy || [];
                    !(0, helpers_1.deepEqual)(v, old) && this.$emit('update:options', v);
                },
                'update:page': (v) => this.$emit('update:page', v),
                'update:items-per-page': (v) => this.$emit('update:items-per-page', v),
                'update:sort-by': (v) => this.$emit('update:sort-by', v),
                'update:sort-desc': (v) => this.$emit('update:sort-desc', v),
                'update:group-by': (v) => this.$emit('update:group-by', v),
                'update:group-desc': (v) => this.$emit('update:group-desc', v),
                pagination: (v, old) => !(0, helpers_1.deepEqual)(v, old) && this.$emit('pagination', v),
                'current-items': (v) => {
                    this.internalCurrentItems = v;
                    this.$emit('current-items', v);
                },
                'page-count': (v) => this.$emit('page-count', v),
            },
            scopedSlots: {
                default: this.genDefaultScopedSlot,
            },
        });
    },
});
//# sourceMappingURL=VDataTable.js.map