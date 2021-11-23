$.ajax({
    url: "spongebobcharacters.json",
    success: function(data) {
       let acount = 0;
       let ncount = 0;
        data.spongebobcharacters.forEach(character => {
            let firstLetter = character.name[0].toLowerCase();
            if (firstLetter.match(/[a-mA-M]/)) {
                acount++
            } else {
                ncount++
            }
            $("table#characters tbody").append(`
            <tr>
                <td>${character.name}</td>
                <td>${character.age}</td>
                <td>${character.residence}</td>
                <td>${character.occupation}</td>
            </tr>
            `)
            console.log(character);
        });
        $("body").append(`
        <button id="buttonA">
        A - M (${acount})
        </button>
        <button id="buttonB">
        N - Z (${ncount})
        </button>
        `)
        $("#buttonA").click(function(e){
            $("tbody tr").each(function(el) {
                let value = $(this).children().first().text();
                if(!value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            })
        })
        $("#buttonB").click(function(e){
            $("tbody tr").each(function(el) {
                let value = $(this).children().first().text();
                if(value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            })
        })
        console.log(data);
    }
})

$("input").keyup(function(e){
    $("tbody tr").each(function (el) {
        let value = $(this).children().first().text().toLowerCase();
           console.log(value)
           if(e.target.value === "") {
               $(this).removeClass("highlight");
           }
           else if(value.includes(e.target.value.toLowerCase())) {
            $(this).addClass("highlight");
        } else {
            $(this).removeClass("highlight");
        }
    })
       
})