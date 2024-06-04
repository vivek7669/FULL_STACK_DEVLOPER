let adata = [];

const puttdata = () => {
    
    document.querySelector('#tabledata').innerHTML = "";
    adata.map((elm)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elm.cname;
        let td2 = document.createElement("td");
        td2.innerText = elm.cnumber;
        let td3 = document.createElement("td");
        td3.innerText = elm.cadress;
        let td4 = document.createElement("td"); 
        let bspan = document.createElement("span");
        td4.appendChild(bspan);
        let td5 = document.createElement("td");
        let dspan = document.createElement("span");
        td5.appendChild(dspan);
        let td6 = document.createElement("td");
        td6.innerText = "Watch Amount";

        td6.addEventListener('click',()=>{
            bspan.innerText = elm.cbalance;
            dspan.innerText = elm.cdepo_bal;
    })

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector('#tabledata').append(tr);
    })

    c1.withdraw();
}

class customerdata {
    #cname;
    #cnumber;
    #cadress;
    #cbalance;
    #cdepo_bal;
    constructor(cname,cnumber,cadress,cbalance,cdepo_bal){
        this.#cname = cname;
        this.#cnumber = cnumber;
        this.#cadress = cadress;
        this.#cbalance = cbalance;
        this.#cdepo_bal = cdepo_bal;
    }
    putdatas(){
        
           let cdata = {
             cname : this.#cname,
             cnumber : this.#cnumber,
             cadress : this.#cadress,
             cbalance : this.#cbalance,
             cdepo_bal : this.#cdepo_bal
           }

      
        let depositamt1 = this.#cdepo_bal;
            cdata.cbalance =  Number(cdata.cbalance) + Number(depositamt1);

            let withdrawamt1 = this.#cbalance;
            let withdrawAmo = document.querySelector('.card');
            let withdrawAmount = document.querySelector('.card-text');
            withdrawAmo.addEventListener('click',()=>{
                if((withdrawAmount < withdrawamt1) && (withdrawamt1-withdrawAmount < 0)){
                    alert("Please");
                }
            })


           adata.push(cdata);

           puttdata();

           
           

    }



}

const getdata = (e) => {
    e.preventDefault();
    let cname = document.querySelector('#name').value;
    let cnumber = document.querySelector('#number').value;
    let cadress = document.querySelector('#address').value;
    let cbalance = document.querySelector('#balance').value;
    let cdepo_bal = document.querySelector('#deposit_amt').value;

    let c1 = new customerdata(cname , cnumber , cadress, cbalance , cdepo_bal);
    c1.putdatas();

}
let formdata = document.querySelector('#formdata');
formdata.addEventListener('submit',getdata);