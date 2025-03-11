<template>
    <VContainer>
        <!-- <VBtn class="text-none red"> aaaaaaaaaaa</VBtn> -->
        <WBC   :item="item000" > </WBC>

    </VContainer>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
    name: "Home",
    data() {
        return {
item000: {
        comp:'VBtn',
        props:{
mode:'dev',
            lang:'_ar',
            // lang:'fr',
html:{_en:'englisi-en',fr:'llllllll-fr',_ar:'3arbi'},
            // html:thiss=>{
            //     console.log('aaaaaaaaaaaaaaaaaa',thiss)
            //     // return 'lllllllll'
            //     return {EN:'llllllccccccclll-en',en:'llllllll-fr'}
            // }
        },
        a:5555555555555,
        // init:that=>()=>{
        //     that.data.props.html='tetx load ';
        //     that.data.comp='VBtn';
            
        //     alert('component is loaded')
        //     console.log('component is loaded',that)
        // },
        events:{
            
                        
            mouseleave:that=>()=>{

                that.data.props.color=that.proto.randomColor();
                
                alert('mouseleave the button, color is changed ')
                console.log('hellowaaaaaaaaaaaaaaa',that)
                that.data.props.html+=that.data.comp;
                that.data.props.key+='1'
            },
            click:thiss=>()=>{
                thiss.data.comp='~VBtn';
                thiss.data.props.html='click me to rest ';
                // alert(thiss)
                console.log('thissssssss',thiss)
                alert('button is clicked, value is rest to "click me to rest "')
                thiss.data.props.key='key'
            }
        }
      }
    };
    },
    components: {
        HelloWorld,
    },
    mounted(){
        console.log(333333333333333333333,this)
    }
};
</script>

<!-- https://jsonplaceholder.typicode.com/posts/ -->