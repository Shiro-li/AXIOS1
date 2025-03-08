//https://hexschool.github.io/ajaxHomework/data.json

let ary = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json').then(
    function(responese){
        ary = responese.data;
        renderData();
    }
)

function renderData(){
    const title =document.querySelector('.title');
    title.textContent = ary[0].name;
};