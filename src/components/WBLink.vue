<script>
export default {
  name: "WBLink",
  inheritAttrs: false,
  props: {
    to: {},
    html: "",
    style_: {},
    attrs_: {},
    inactiveClass: String,
  },
  render(h) {
    let options;

    options = {
      props: {},
      style: {
        "text-decoration": "none",
        ...this.style_,
      },
    };
    options.attrs = {
      href: this.to,
      ...this.attrs_,
    };
    if (this.to[this.to.length - 1] == ">") {
      options.attrs.href = this.to.slice(0, -1);
      options.attrs.target = "_blank";
    }

    if (this.isInternalLink) {
      options.attrs = {
        ...this.attrs_,
      };
      options.props.to = this.to;
      return h("RouterLink", options, [this.html]);
    }

    if (typeof this.html == "object") {
      return h("a", options, [this?.html]);
    } else if (!this.to || !this.html) {
      return h("span", options, this?.html);
    }

    options = {
      props: {},
      style: {
        "text-decoration": "none",
        ...this.style_,
      },
      domProps: {
        innerHTML: [this?.html],
      },
      attrs: {
        href: this.to,
        ...this.attrs_,
      },
    };
    if (this.isExternalLink) {
      return h("a", options);
    }
  },
  computed: {
    isExternalLink() {
      return typeof this.to === "string"; //&& (this.to.startsWith('http')||this.to.startsWith('www.'))
    },
    isInternalLink() {
      return typeof this.to === "object"; //&& (this.to.startsWith('http')||this.to.startsWith('www.'))
    },
  },
  components: {},
  mounted() {},
};
</script>
