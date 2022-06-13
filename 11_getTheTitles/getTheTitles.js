const getTheTitles = function(book) {
    const title =[];

    book.forEach(x => {
    
    title.push(x.title)
 });
return title;

};

// Do not edit below this line
module.exports = getTheTitles;
