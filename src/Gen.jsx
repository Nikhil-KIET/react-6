function Gen(props){

    function genNum(){
           let num=Math.floor(Math.random()*10);
           return num;

    }
    function genSym(){
        let sym=Math.floor(Math.random()*10);
        if(sym==0){
            return "!";
        }
        else if(sym==1){
            return "@";
        }
        else if(sym==2){
                            return "#";
                        }
                        else if(sym==3){
                            return "$";
                        }
                        else if(sym==4){
                            return "%";
                        }
                        else if(sym==5){
                            return "^";
                        }
                        else if(sym==6){
                            return "&";
                        }
                        else if(sym==7){
                            return "*";
                        }
                        else if(sym==8){
                            return "(";
                        }
                        else if(sym==9){
                            return ")";
                        }else{
                            return"/";
                        }



    }
    function genCap(){
        var cap=Math.floor(Math.random()*26)+65;
        return String.fromCharCode(cap);

    }
    function genLow(){
        var low=Math.floor(Math.random()*26)+97;
        return String.fromCharCode(low);



    }
    function clickHandler(){
        let fun=[];
    {
        if(document.getElementById("uc").checked){
            fun.push(genCap);
        }
        if(document.getElementById("lc").checked){
            fun.push(genLow);
        }
        if(document.getElementById("num").checked){
            fun.push(genNum);
        }
        if(document.getElementById("sym").checked){
            fun.push(genSym);
        }
        if(fun.length==0){
            alert("Please select at least one option");
        }

    }
    let ans="";
    for(let i=0;i<fun.length;i++){
        ans+=fun[i]();
    }
    
    for(let i=1;i<props.len-fun.length;i++){
        ans+=fun[Math.floor(Math.random()*fun.length)]();

    }
    
    props.setPassword(ans);


    }
    


    return(
        <div>
            <div>
            <input type="checkbox" name="uc" id="uc" />
            
            <label htmlFor="uc"> Include Upper Case</label>
           

        </div>
        <div>
        <input type="checkbox" name="lc" id="lc" />
            
            <label htmlFor="lc"> Include Lower Case</label>
           

        </div>
        <div>
        <input type="checkbox" name="num" id="num" />
            
            <label htmlFor="num"> Include Numbers </label>
           

        </div>
        <div>
        <input type="checkbox" name="sym" id="sym" />
            
            <label htmlFor="sym"> Include Symbols </label>
           

        </div>

        <button  className=" bg-blue-300 hover:bg-blue-600  rounded-md p-4  " onClick={clickHandler}>Generate Password</button>
        </div>

    )

}
export default Gen;