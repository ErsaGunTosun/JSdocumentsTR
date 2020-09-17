//http protoklu kullanarak bilgi alma ve vermeye denir

let Data = new XMLHttpRequest();

var url = "https://jsonplaceholder.typicode.com/users"; //alcagımız verinin urlesini giriyoruz

Data.open("GET", url, true); //tanımladıgımız url ile internet üzerinden veri alıyoruz
Data.send();

Data.onload = () => {
    if (Data.status == 200) {
        let getData = JSON.parse(Data.responseText);
        document.querySelector(".loading").style.visibility = "visible";


        setTimeout(() => {
            document.querySelector(".loading").style.visibility = "hidden";
            let html = "";
            for (let i = 0; i < getData.length; i++) {
                html += `<tr class="border mt-2 mb-2">
             <th class="text-info border-danger">${getData[i].id}</th>
             <th class="border-danger">${getData[i].name}</th>
             <th class="border-danger">${getData[i].username}</th>
             <th class="border-danger">${getData[i].email}</th>
             </tr>`

            }
            document.querySelector("#course-list").innerHTML = html;


        }, 4000);

    };


}