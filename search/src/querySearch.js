
/*
Quellen:
https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-bool-query.html
https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/search_examples.html

*/


init();

function init() {

    let currentResultShown = 0,
        queryResults;


    let input = document.getElementById("searchInput"),
        searchButton = document.getElementById("searchButton");
    //Date: second dropdown (value)
        toInput.value = 30;

    searchButton.addEventListener("click", function(event) {

       let title
       searchQuery = input.value;
       obj = document.getElementById("mySelect")
       option = obj.options[obj.selectedIndex].value;

        console.log(option);
        console.log(contentInput)

           if (option === titleInput.innerHTML) {
               title = searchQuery;
           }
           if (option === contentInput.innerHTML) {
               content = searchQuery;
           }
           if (option === mediaInput.innerHTML) {
               mediaType = searchQuery;
           }
           if (option === sourceInput.innerHTML) {
               source = searchQuery;
           }

    



        console.log(queryString);

        $.ajax({
            url: "http://localhost:9200/quascot_data/_search",
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            crossDomain: true,
            data: {
                source: queryString,
                source_content_type:"application/json"
            },
            success: async function (result) {
                queryResults = result.hits.hits;
                console.log(queryResults.length + " results found!");
                console.log(queryResults);
                await filterResultsByDate();
                await resetResultList(true);
                if(queryResults.length != 0) {
                    showResultPage();
                    showResults();
                }
            },
            error: function(result) {
                console.log("ERROR");
                console.log(result);
            },
        });


        function getTypedInInfo(title) {
            let array = [];
            if(title !== undefined) {
                array.push("title");
                array.push(title);
            }
            
            return array;
        }


        function showResults() {
            var resultList = document.getElementById("serpResultContent"),
                resultElement = document.getElementById("resultElement"),
                resultTitle = document.getElementById("resultTitle"),
                resultMediaType = document.getElementById("resultMediaType"),
                resultContent = document.getElementById("resultContent");


            if((queryResults.length-currentResultShown) < 10000) {
                for(let i=currentResultShown; i<queryResults.length; i++) {
                    showResultAt(i);
                }
                currentResultsShown = queryResults.length;
            }

            function showResultAt(index) {
                if(queryResults[index] !== undefined) {
                    var currentResult = queryResults[index]._source,
                        resultDomElement = resultElement.cloneNode(),
                        resultDomTitle = resultTitle.cloneNode(),

                    resultDomTitle.innerText = currentResult["title"];
                    resultList.appendChild(resultDomElement);
                    resultDomElement.appendChild(resultDomTitle);
                   
                }
            }
        }

        function showResultPage() {
            let amount = queryResults.length;
            resultHeader = document.getElementById("resultHeader"),
                published = document.getElementById("serpPublished");

            published.style.visibility = "visible";
            resultHeader.innerText = amount + " documents contain the query " + searchQuery ;
        }

        async function resetResultList(shouldResetAll) {
            let results = document.querySelectorAll(".results");
            if(shouldResetAll) {
                currentResultsShown = 0;
            }

            for(let i=5; i<results.length; i+=3) {
                delete results[i];
                delete results[i+1];
                delete results[i+2];
            }
        }

    });
}


