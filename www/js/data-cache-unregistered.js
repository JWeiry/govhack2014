/**
 * Created by jweir on 13/07/2014.
 */
var theData = [{"count_builds":"13","shirename":"Alpine Shire of","Levy_return_year":"2009"}
    , {"count_builds":"5","shirename":"Alpine Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Alpine Shire of","Levy_return_year":"2011"}
    , {"count_builds":"7","shirename":"Alpine Shire of","Levy_return_year":"2012"}
    , {"count_builds":"5","shirename":"Alpine Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Alpine Shire of","Levy_return_year":"2014"}
    , {"count_builds":"5","shirename":"Ararat Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"5","shirename":"Ararat Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"1","shirename":"Ararat Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Ararat Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"1","shirename":"Ararat Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"47","shirename":"Ballarat City of","Levy_return_year":"2009"}
    , {"count_builds":"33","shirename":"Ballarat City of","Levy_return_year":"2010"}
    , {"count_builds":"64","shirename":"Ballarat City of","Levy_return_year":"2011"}
    , {"count_builds":"91","shirename":"Ballarat City of","Levy_return_year":"2012"}
    , {"count_builds":"66","shirename":"Ballarat City of","Levy_return_year":"2013"}
    , {"count_builds":"30","shirename":"Ballarat City of","Levy_return_year":"2014"}
    , {"count_builds":"24","shirename":"Banyule City of","Levy_return_year":"2009"}
    , {"count_builds":"16","shirename":"Banyule City of","Levy_return_year":"2010"}
    , {"count_builds":"14","shirename":"Banyule City of","Levy_return_year":"2011"}
    , {"count_builds":"10","shirename":"Banyule City of","Levy_return_year":"2012"}
    , {"count_builds":"16","shirename":"Banyule City of","Levy_return_year":"2013"}
    , {"count_builds":"8","shirename":"Banyule City of","Levy_return_year":"2014"}
    , {"count_builds":"28","shirename":"Bass Coast Shire of","Levy_return_year":"2009"}
    , {"count_builds":"35","shirename":"Bass Coast Shire of","Levy_return_year":"2010"}
    , {"count_builds":"18","shirename":"Bass Coast Shire of","Levy_return_year":"2011"}
    , {"count_builds":"20","shirename":"Bass Coast Shire of","Levy_return_year":"2012"}
    , {"count_builds":"18","shirename":"Bass Coast Shire of","Levy_return_year":"2013"}
    , {"count_builds":"3","shirename":"Bass Coast Shire of","Levy_return_year":"2014"}
    , {"count_builds":"31","shirename":"Baw Baw Shire of","Levy_return_year":"2009"}
    , {"count_builds":"34","shirename":"Baw Baw Shire of","Levy_return_year":"2010"}
    , {"count_builds":"31","shirename":"Baw Baw Shire of","Levy_return_year":"2011"}
    , {"count_builds":"52","shirename":"Baw Baw Shire of","Levy_return_year":"2012"}
    , {"count_builds":"35","shirename":"Baw Baw Shire of","Levy_return_year":"2013"}
    , {"count_builds":"11","shirename":"Baw Baw Shire of","Levy_return_year":"2014"}
    , {"count_builds":"44","shirename":"Bayside City of","Levy_return_year":"2009"}
    , {"count_builds":"41","shirename":"Bayside City of","Levy_return_year":"2010"}
    , {"count_builds":"31","shirename":"Bayside City of","Levy_return_year":"2011"}
    , {"count_builds":"23","shirename":"Bayside City of","Levy_return_year":"2012"}
    , {"count_builds":"33","shirename":"Bayside City of","Levy_return_year":"2013"}
    , {"count_builds":"15","shirename":"Bayside City of","Levy_return_year":"2014"}
    , {"count_builds":"10","shirename":"Benalla Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"13","shirename":"Benalla Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"5","shirename":"Benalla Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"4","shirename":"Benalla Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"6","shirename":"Benalla Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Benalla Rural City of","Levy_return_year":"2014"}
    , {"count_builds":"45","shirename":"Boroondara City of","Levy_return_year":"2009"}
    , {"count_builds":"46","shirename":"Boroondara City of","Levy_return_year":"2010"}
    , {"count_builds":"29","shirename":"Boroondara City of","Levy_return_year":"2011"}
    , {"count_builds":"25","shirename":"Boroondara City of","Levy_return_year":"2012"}
    , {"count_builds":"36","shirename":"Boroondara City of","Levy_return_year":"2013"}
    , {"count_builds":"9","shirename":"Boroondara City of","Levy_return_year":"2014"}
    , {"count_builds":"67","shirename":"Brimbank City of","Levy_return_year":"2009"}
    , {"count_builds":"26","shirename":"Brimbank City of","Levy_return_year":"2010"}
    , {"count_builds":"25","shirename":"Brimbank City of","Levy_return_year":"2011"}
    , {"count_builds":"25","shirename":"Brimbank City of","Levy_return_year":"2012"}
    , {"count_builds":"30","shirename":"Brimbank City of","Levy_return_year":"2013"}
    , {"count_builds":"6","shirename":"Brimbank City of","Levy_return_year":"2014"}
    , {"count_builds":"1","shirename":"Buloke Shire of","Levy_return_year":"2009"}
    , {"count_builds":"1","shirename":"Buloke Shire of","Levy_return_year":"2010"}
    , {"count_builds":"3","shirename":"Buloke Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Buloke Shire of","Levy_return_year":"2014"}
    , {"count_builds":"10","shirename":"Campaspe Shire of","Levy_return_year":"2009"}
    , {"count_builds":"10","shirename":"Campaspe Shire of","Levy_return_year":"2010"}
    , {"count_builds":"7","shirename":"Campaspe Shire of","Levy_return_year":"2011"}
    , {"count_builds":"1","shirename":"Campaspe Shire of","Levy_return_year":"2012"}
    , {"count_builds":"9","shirename":"Campaspe Shire of","Levy_return_year":"2013"}
    , {"count_builds":"5","shirename":"Campaspe Shire of","Levy_return_year":"2014"}
    , {"count_builds":"72","shirename":"Cardinia Shire of","Levy_return_year":"2009"}
    , {"count_builds":"37","shirename":"Cardinia Shire of","Levy_return_year":"2010"}
    , {"count_builds":"51","shirename":"Cardinia Shire of","Levy_return_year":"2011"}
    , {"count_builds":"87","shirename":"Cardinia Shire of","Levy_return_year":"2012"}
    , {"count_builds":"67","shirename":"Cardinia Shire of","Levy_return_year":"2013"}
    , {"count_builds":"34","shirename":"Cardinia Shire of","Levy_return_year":"2014"}
    , {"count_builds":"138","shirename":"Casey City of","Levy_return_year":"2009"}
    , {"count_builds":"63","shirename":"Casey City of","Levy_return_year":"2010"}
    , {"count_builds":"71","shirename":"Casey City of","Levy_return_year":"2011"}
    , {"count_builds":"103","shirename":"Casey City of","Levy_return_year":"2012"}
    , {"count_builds":"131","shirename":"Casey City of","Levy_return_year":"2013"}
    , {"count_builds":"53","shirename":"Casey City of","Levy_return_year":"2014"}
    , {"count_builds":"4","shirename":"Central Goldfields Shire of","Levy_return_year":"2009"}
    , {"count_builds":"2","shirename":"Central Goldfields Shire of","Levy_return_year":"2010"}
    , {"count_builds":"3","shirename":"Central Goldfields Shire of","Levy_return_year":"2011"}
    , {"count_builds":"5","shirename":"Central Goldfields Shire of","Levy_return_year":"2012"}
    , {"count_builds":"6","shirename":"Central Goldfields Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Central Goldfields Shire of","Levy_return_year":"2014"}
    , {"count_builds":"8","shirename":"Colac-Otway Shire of","Levy_return_year":"2009"}
    , {"count_builds":"7","shirename":"Colac-Otway Shire of","Levy_return_year":"2010"}
    , {"count_builds":"5","shirename":"Colac-Otway Shire of","Levy_return_year":"2011"}
    , {"count_builds":"5","shirename":"Colac-Otway Shire of","Levy_return_year":"2012"}
    , {"count_builds":"4","shirename":"Colac-Otway Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Colac-Otway Shire of","Levy_return_year":"2014"}
    , {"count_builds":"2","shirename":"Corangamite Shire of","Levy_return_year":"2009"}
    , {"count_builds":"2","shirename":"Corangamite Shire of","Levy_return_year":"2010"}
    , {"count_builds":"1","shirename":"Corangamite Shire of","Levy_return_year":"2011"}
    , {"count_builds":"25","shirename":"Darebin City of","Levy_return_year":"2009"}
    , {"count_builds":"23","shirename":"Darebin City of","Levy_return_year":"2010"}
    , {"count_builds":"22","shirename":"Darebin City of","Levy_return_year":"2011"}
    , {"count_builds":"23","shirename":"Darebin City of","Levy_return_year":"2012"}
    , {"count_builds":"25","shirename":"Darebin City of","Levy_return_year":"2013"}
    , {"count_builds":"3","shirename":"Darebin City of","Levy_return_year":"2014"}
    , {"count_builds":"18","shirename":"East Gippsland Shire of","Levy_return_year":"2009"}
    , {"count_builds":"20","shirename":"East Gippsland Shire of","Levy_return_year":"2010"}
    , {"count_builds":"24","shirename":"East Gippsland Shire of","Levy_return_year":"2011"}
    , {"count_builds":"15","shirename":"East Gippsland Shire of","Levy_return_year":"2012"}
    , {"count_builds":"15","shirename":"East Gippsland Shire of","Levy_return_year":"2013"}
    , {"count_builds":"9","shirename":"East Gippsland Shire of","Levy_return_year":"2014"}
    , {"count_builds":"30","shirename":"Frankston City of","Levy_return_year":"2009"}
    , {"count_builds":"43","shirename":"Frankston City of","Levy_return_year":"2010"}
    , {"count_builds":"25","shirename":"Frankston City of","Levy_return_year":"2011"}
    , {"count_builds":"80","shirename":"Frankston City of","Levy_return_year":"2012"}
    , {"count_builds":"13","shirename":"Frankston City of","Levy_return_year":"2013"}
    , {"count_builds":"7","shirename":"Frankston City of","Levy_return_year":"2014"}
    , {"count_builds":"2","shirename":"Gannawarra Shire of","Levy_return_year":"2013"}
    , {"count_builds":"31","shirename":"Glen Eira City of","Levy_return_year":"2009"}
    , {"count_builds":"35","shirename":"Glen Eira City of","Levy_return_year":"2010"}
    , {"count_builds":"24","shirename":"Glen Eira City of","Levy_return_year":"2011"}
    , {"count_builds":"25","shirename":"Glen Eira City of","Levy_return_year":"2012"}
    , {"count_builds":"21","shirename":"Glen Eira City of","Levy_return_year":"2013"}
    , {"count_builds":"14","shirename":"Glen Eira City of","Levy_return_year":"2014"}
    , {"count_builds":"3","shirename":"Glenelg Shire of","Levy_return_year":"2009"}
    , {"count_builds":"2","shirename":"Glenelg Shire of","Levy_return_year":"2013"}
    , {"count_builds":"6","shirename":"Golden Plains Shire of","Levy_return_year":"2009"}
    , {"count_builds":"4","shirename":"Golden Plains Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Golden Plains Shire of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Golden Plains Shire of","Levy_return_year":"2012"}
    , {"count_builds":"11","shirename":"Golden Plains Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Golden Plains Shire of","Levy_return_year":"2014"}
    , {"count_builds":"74","shirename":"Greater Bendigo City of","Levy_return_year":"2009"}
    , {"count_builds":"47","shirename":"Greater Bendigo City of","Levy_return_year":"2010"}
    , {"count_builds":"27","shirename":"Greater Bendigo City of","Levy_return_year":"2011"}
    , {"count_builds":"42","shirename":"Greater Bendigo City of","Levy_return_year":"2012"}
    , {"count_builds":"37","shirename":"Greater Bendigo City of","Levy_return_year":"2013"}
    , {"count_builds":"14","shirename":"Greater Bendigo City of","Levy_return_year":"2014"}
    , {"count_builds":"31","shirename":"Greater Dandenong City of","Levy_return_year":"2009"}
    , {"count_builds":"19","shirename":"Greater Dandenong City of","Levy_return_year":"2010"}
    , {"count_builds":"14","shirename":"Greater Dandenong City of","Levy_return_year":"2011"}
    , {"count_builds":"22","shirename":"Greater Dandenong City of","Levy_return_year":"2012"}
    , {"count_builds":"15","shirename":"Greater Dandenong City of","Levy_return_year":"2013"}
    , {"count_builds":"16","shirename":"Greater Dandenong City of","Levy_return_year":"2014"}
    , {"count_builds":"99","shirename":"Greater Geelong City of","Levy_return_year":"2009"}
    , {"count_builds":"70","shirename":"Greater Geelong City of","Levy_return_year":"2010"}
    , {"count_builds":"64","shirename":"Greater Geelong City of","Levy_return_year":"2011"}
    , {"count_builds":"132","shirename":"Greater Geelong City of","Levy_return_year":"2012"}
    , {"count_builds":"95","shirename":"Greater Geelong City of","Levy_return_year":"2013"}
    , {"count_builds":"43","shirename":"Greater Geelong City of","Levy_return_year":"2014"}
    , {"count_builds":"24","shirename":"Greater Shepparton City of","Levy_return_year":"2009"}
    , {"count_builds":"11","shirename":"Greater Shepparton City of","Levy_return_year":"2010"}
    , {"count_builds":"10","shirename":"Greater Shepparton City of","Levy_return_year":"2011"}
    , {"count_builds":"13","shirename":"Greater Shepparton City of","Levy_return_year":"2012"}
    , {"count_builds":"8","shirename":"Greater Shepparton City of","Levy_return_year":"2013"}
    , {"count_builds":"5","shirename":"Greater Shepparton City of","Levy_return_year":"2014"}
    , {"count_builds":"14","shirename":"Hepburn Shire of","Levy_return_year":"2009"}
    , {"count_builds":"5","shirename":"Hepburn Shire of","Levy_return_year":"2010"}
    , {"count_builds":"5","shirename":"Hepburn Shire of","Levy_return_year":"2011"}
    , {"count_builds":"5","shirename":"Hepburn Shire of","Levy_return_year":"2012"}
    , {"count_builds":"4","shirename":"Hepburn Shire of","Levy_return_year":"2013"}
    , {"count_builds":"3","shirename":"Hepburn Shire of","Levy_return_year":"2014"}
    , {"count_builds":"2","shirename":"Hindmarsh Shire of","Levy_return_year":"2011"}
    , {"count_builds":"32","shirename":"Hobsons Bay City of","Levy_return_year":"2009"}
    , {"count_builds":"25","shirename":"Hobsons Bay City of","Levy_return_year":"2010"}
    , {"count_builds":"13","shirename":"Hobsons Bay City of","Levy_return_year":"2011"}
    , {"count_builds":"16","shirename":"Hobsons Bay City of","Levy_return_year":"2012"}
    , {"count_builds":"20","shirename":"Hobsons Bay City of","Levy_return_year":"2013"}
    , {"count_builds":"8","shirename":"Hobsons Bay City of","Levy_return_year":"2014"}
    , {"count_builds":"10","shirename":"Horsham Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"8","shirename":"Horsham Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"4","shirename":"Horsham Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"4","shirename":"Horsham Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"2","shirename":"Horsham Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Horsham Rural City of","Levy_return_year":"2014"}
    , {"count_builds":"83","shirename":"Hume City of","Levy_return_year":"2009"}
    , {"count_builds":"49","shirename":"Hume City of","Levy_return_year":"2010"}
    , {"count_builds":"31","shirename":"Hume City of","Levy_return_year":"2011"}
    , {"count_builds":"136","shirename":"Hume City of","Levy_return_year":"2012"}
    , {"count_builds":"128","shirename":"Hume City of","Levy_return_year":"2013"}
    , {"count_builds":"26","shirename":"Hume City of","Levy_return_year":"2014"}
    , {"count_builds":"4","shirename":"Indigo Shire of","Levy_return_year":"2009"}
    , {"count_builds":"1","shirename":"Indigo Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Indigo Shire of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Indigo Shire of","Levy_return_year":"2012"}
    , {"count_builds":"4","shirename":"Indigo Shire of","Levy_return_year":"2013"}
    , {"count_builds":"50","shirename":"Kingston City of","Levy_return_year":"2009"}
    , {"count_builds":"41","shirename":"Kingston City of","Levy_return_year":"2010"}
    , {"count_builds":"28","shirename":"Kingston City of","Levy_return_year":"2011"}
    , {"count_builds":"27","shirename":"Kingston City of","Levy_return_year":"2012"}
    , {"count_builds":"27","shirename":"Kingston City of","Levy_return_year":"2013"}
    , {"count_builds":"11","shirename":"Kingston City of","Levy_return_year":"2014"}
    , {"count_builds":"62","shirename":"Knox City of","Levy_return_year":"2009"}
    , {"count_builds":"19","shirename":"Knox City of","Levy_return_year":"2010"}
    , {"count_builds":"41","shirename":"Knox City of","Levy_return_year":"2011"}
    , {"count_builds":"29","shirename":"Knox City of","Levy_return_year":"2012"}
    , {"count_builds":"34","shirename":"Knox City of","Levy_return_year":"2013"}
    , {"count_builds":"5","shirename":"Knox City of","Levy_return_year":"2014"}
    , {"count_builds":"28","shirename":"Latrobe City of","Levy_return_year":"2009"}
    , {"count_builds":"17","shirename":"Latrobe City of","Levy_return_year":"2010"}
    , {"count_builds":"9","shirename":"Latrobe City of","Levy_return_year":"2011"}
    , {"count_builds":"14","shirename":"Latrobe City of","Levy_return_year":"2012"}
    , {"count_builds":"21","shirename":"Latrobe City of","Levy_return_year":"2013"}
    , {"count_builds":"8","shirename":"Latrobe City of","Levy_return_year":"2014"}
    , {"count_builds":"1","shirename":"Loddon Shire of","Levy_return_year":"2009"}
    , {"count_builds":"1","shirename":"Loddon Shire of","Levy_return_year":"2010"}
    , {"count_builds":"1","shirename":"Loddon Shire of","Levy_return_year":"2011"}
    , {"count_builds":"1","shirename":"Loddon Shire of","Levy_return_year":"2012"}
    , {"count_builds":"1","shirename":"Loddon Shire of","Levy_return_year":"2014"}
    , {"count_builds":"10","shirename":"Macedon Ranges Shire of","Levy_return_year":"2009"}
    , {"count_builds":"17","shirename":"Macedon Ranges Shire of","Levy_return_year":"2010"}
    , {"count_builds":"8","shirename":"Macedon Ranges Shire of","Levy_return_year":"2011"}
    , {"count_builds":"14","shirename":"Macedon Ranges Shire of","Levy_return_year":"2012"}
    , {"count_builds":"15","shirename":"Macedon Ranges Shire of","Levy_return_year":"2013"}
    , {"count_builds":"4","shirename":"Macedon Ranges Shire of","Levy_return_year":"2014"}
    , {"count_builds":"28","shirename":"Manningham City of","Levy_return_year":"2009"}
    , {"count_builds":"36","shirename":"Manningham City of","Levy_return_year":"2010"}
    , {"count_builds":"14","shirename":"Manningham City of","Levy_return_year":"2011"}
    , {"count_builds":"20","shirename":"Manningham City of","Levy_return_year":"2012"}
    , {"count_builds":"11","shirename":"Manningham City of","Levy_return_year":"2013"}
    , {"count_builds":"7","shirename":"Manningham City of","Levy_return_year":"2014"}
    , {"count_builds":"12","shirename":"Mansfield Shire of","Levy_return_year":"2009"}
    , {"count_builds":"7","shirename":"Mansfield Shire of","Levy_return_year":"2010"}
    , {"count_builds":"3","shirename":"Mansfield Shire of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Mansfield Shire of","Levy_return_year":"2012"}
    , {"count_builds":"4","shirename":"Mansfield Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Mansfield Shire of","Levy_return_year":"2014"}
    , {"count_builds":"22","shirename":"Maribyrnong City of","Levy_return_year":"2009"}
    , {"count_builds":"17","shirename":"Maribyrnong City of","Levy_return_year":"2010"}
    , {"count_builds":"12","shirename":"Maribyrnong City of","Levy_return_year":"2011"}
    , {"count_builds":"15","shirename":"Maribyrnong City of","Levy_return_year":"2012"}
    , {"count_builds":"14","shirename":"Maribyrnong City of","Levy_return_year":"2013"}
    , {"count_builds":"2","shirename":"Maribyrnong City of","Levy_return_year":"2014"}
    , {"count_builds":"41","shirename":"Maroondah City of","Levy_return_year":"2009"}
    , {"count_builds":"39","shirename":"Maroondah City of","Levy_return_year":"2010"}
    , {"count_builds":"26","shirename":"Maroondah City of","Levy_return_year":"2011"}
    , {"count_builds":"34","shirename":"Maroondah City of","Levy_return_year":"2012"}
    , {"count_builds":"66","shirename":"Maroondah City of","Levy_return_year":"2013"}
    , {"count_builds":"15","shirename":"Maroondah City of","Levy_return_year":"2014"}
    , {"count_builds":"8","shirename":"Melbourne City of","Levy_return_year":"2009"}
    , {"count_builds":"9","shirename":"Melbourne City of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Melbourne City of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Melbourne City of","Levy_return_year":"2012"}
    , {"count_builds":"5","shirename":"Melbourne City of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Melbourne City of","Levy_return_year":"2014"}
    , {"count_builds":"169","shirename":"Melton Shire of","Levy_return_year":"2009"}
    , {"count_builds":"89","shirename":"Melton Shire of","Levy_return_year":"2010"}
    , {"count_builds":"79","shirename":"Melton Shire of","Levy_return_year":"2011"}
    , {"count_builds":"97","shirename":"Melton Shire of","Levy_return_year":"2012"}
    , {"count_builds":"69","shirename":"Melton Shire of","Levy_return_year":"2013"}
    , {"count_builds":"21","shirename":"Melton Shire of","Levy_return_year":"2014"}
    , {"count_builds":"20","shirename":"Mildura Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"12","shirename":"Mildura Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"15","shirename":"Mildura Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"13","shirename":"Mildura Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"24","shirename":"Mildura Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"6","shirename":"Mildura Rural City of","Levy_return_year":"2014"}
    , {"count_builds":"11","shirename":"Mitchell Shire of","Levy_return_year":"2009"}
    , {"count_builds":"10","shirename":"Mitchell Shire of","Levy_return_year":"2010"}
    , {"count_builds":"20","shirename":"Mitchell Shire of","Levy_return_year":"2011"}
    , {"count_builds":"5","shirename":"Mitchell Shire of","Levy_return_year":"2012"}
    , {"count_builds":"8","shirename":"Mitchell Shire of","Levy_return_year":"2013"}
    , {"count_builds":"8","shirename":"Moira Shire of","Levy_return_year":"2009"}
    , {"count_builds":"4","shirename":"Moira Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Moira Shire of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Moira Shire of","Levy_return_year":"2012"}
    , {"count_builds":"5","shirename":"Moira Shire of","Levy_return_year":"2013"}
    , {"count_builds":"53","shirename":"Monash City of","Levy_return_year":"2009"}
    , {"count_builds":"49","shirename":"Monash City of","Levy_return_year":"2010"}
    , {"count_builds":"52","shirename":"Monash City of","Levy_return_year":"2011"}
    , {"count_builds":"72","shirename":"Monash City of","Levy_return_year":"2012"}
    , {"count_builds":"73","shirename":"Monash City of","Levy_return_year":"2013"}
    , {"count_builds":"7","shirename":"Monash City of","Levy_return_year":"2014"}
    , {"count_builds":"44","shirename":"Moonee Valley City of","Levy_return_year":"2009"}
    , {"count_builds":"39","shirename":"Moonee Valley City of","Levy_return_year":"2010"}
    , {"count_builds":"22","shirename":"Moonee Valley City of","Levy_return_year":"2011"}
    , {"count_builds":"39","shirename":"Moonee Valley City of","Levy_return_year":"2012"}
    , {"count_builds":"45","shirename":"Moonee Valley City of","Levy_return_year":"2013"}
    , {"count_builds":"18","shirename":"Moonee Valley City of","Levy_return_year":"2014"}
    , {"count_builds":"8","shirename":"Moorabool Shire of","Levy_return_year":"2009"}
    , {"count_builds":"6","shirename":"Moorabool Shire of","Levy_return_year":"2010"}
    , {"count_builds":"6","shirename":"Moorabool Shire of","Levy_return_year":"2011"}
    , {"count_builds":"14","shirename":"Moorabool Shire of","Levy_return_year":"2012"}
    , {"count_builds":"8","shirename":"Moorabool Shire of","Levy_return_year":"2013"}
    , {"count_builds":"3","shirename":"Moorabool Shire of","Levy_return_year":"2014"}
    , {"count_builds":"39","shirename":"Moreland City of","Levy_return_year":"2009"}
    , {"count_builds":"41","shirename":"Moreland City of","Levy_return_year":"2010"}
    , {"count_builds":"30","shirename":"Moreland City of","Levy_return_year":"2011"}
    , {"count_builds":"37","shirename":"Moreland City of","Levy_return_year":"2012"}
    , {"count_builds":"44","shirename":"Moreland City of","Levy_return_year":"2013"}
    , {"count_builds":"19","shirename":"Moreland City of","Levy_return_year":"2014"}
    , {"count_builds":"101","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2009"}
    , {"count_builds":"78","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2010"}
    , {"count_builds":"53","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2011"}
    , {"count_builds":"95","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2012"}
    , {"count_builds":"76","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2013"}
    , {"count_builds":"14","shirename":"Mornington Peninsula Shire of","Levy_return_year":"2014"}
    , {"count_builds":"8","shirename":"Mount Alexander Shire of","Levy_return_year":"2009"}
    , {"count_builds":"2","shirename":"Mount Alexander Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Mount Alexander Shire of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Mount Alexander Shire of","Levy_return_year":"2012"}
    , {"count_builds":"7","shirename":"Mount Alexander Shire of","Levy_return_year":"2013"}
    , {"count_builds":"9","shirename":"Moyne Shire of","Levy_return_year":"2009"}
    , {"count_builds":"1","shirename":"Moyne Shire of","Levy_return_year":"2010"}
    , {"count_builds":"3","shirename":"Moyne Shire of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Moyne Shire of","Levy_return_year":"2013"}
    , {"count_builds":"2","shirename":"Moyne Shire of","Levy_return_year":"2014"}
    , {"count_builds":"46","shirename":"Murrindindi Shire of","Levy_return_year":"2009"}
    , {"count_builds":"38","shirename":"Murrindindi Shire of","Levy_return_year":"2010"}
    , {"count_builds":"4","shirename":"Murrindindi Shire of","Levy_return_year":"2011"}
    , {"count_builds":"11","shirename":"Murrindindi Shire of","Levy_return_year":"2012"}
    , {"count_builds":"3","shirename":"Murrindindi Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Murrindindi Shire of","Levy_return_year":"2014"}
    , {"count_builds":"24","shirename":"Nillumbik Shire of","Levy_return_year":"2009"}
    , {"count_builds":"16","shirename":"Nillumbik Shire of","Levy_return_year":"2010"}
    , {"count_builds":"9","shirename":"Nillumbik Shire of","Levy_return_year":"2011"}
    , {"count_builds":"11","shirename":"Nillumbik Shire of","Levy_return_year":"2012"}
    , {"count_builds":"11","shirename":"Nillumbik Shire of","Levy_return_year":"2013"}
    , {"count_builds":"5","shirename":"Nillumbik Shire of","Levy_return_year":"2014"}
    , {"count_builds":"13","shirename":"Northern Grampians Shire of","Levy_return_year":"2009"}
    , {"count_builds":"8","shirename":"Northern Grampians Shire of","Levy_return_year":"2010"}
    , {"count_builds":"4","shirename":"Northern Grampians Shire of","Levy_return_year":"2011"}
    , {"count_builds":"5","shirename":"Northern Grampians Shire of","Levy_return_year":"2012"}
    , {"count_builds":"2","shirename":"Northern Grampians Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Northern Grampians Shire of","Levy_return_year":"2014"}
    , {"count_builds":"16","shirename":"Port Phillip City of","Levy_return_year":"2009"}
    , {"count_builds":"9","shirename":"Port Phillip City of","Levy_return_year":"2010"}
    , {"count_builds":"5","shirename":"Port Phillip City of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Port Phillip City of","Levy_return_year":"2012"}
    , {"count_builds":"9","shirename":"Port Phillip City of","Levy_return_year":"2013"}
    , {"count_builds":"7","shirename":"Port Phillip City of","Levy_return_year":"2014"}
    , {"count_builds":"4","shirename":"Pyrenees Shire of","Levy_return_year":"2011"}
    , {"count_builds":"4","shirename":"Pyrenees Shire of","Levy_return_year":"2012"}
    , {"count_builds":"1","shirename":"Pyrenees Shire of","Levy_return_year":"2013"}
    , {"count_builds":"4","shirename":"Queenscliffe Borough of","Levy_return_year":"2009"}
    , {"count_builds":"3","shirename":"Queenscliffe Borough of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Queenscliffe Borough of","Levy_return_year":"2012"}
    , {"count_builds":"3","shirename":"Queenscliffe Borough of","Levy_return_year":"2013"}
    , {"count_builds":"14","shirename":"South Gippsland Shire of","Levy_return_year":"2009"}
    , {"count_builds":"7","shirename":"South Gippsland Shire of","Levy_return_year":"2010"}
    , {"count_builds":"18","shirename":"South Gippsland Shire of","Levy_return_year":"2011"}
    , {"count_builds":"6","shirename":"South Gippsland Shire of","Levy_return_year":"2012"}
    , {"count_builds":"9","shirename":"South Gippsland Shire of","Levy_return_year":"2013"}
    , {"count_builds":"3","shirename":"South Gippsland Shire of","Levy_return_year":"2014"}
    , {"count_builds":"4","shirename":"Southern Grampians Shire of","Levy_return_year":"2009"}
    , {"count_builds":"1","shirename":"Southern Grampians Shire of","Levy_return_year":"2010"}
    , {"count_builds":"1","shirename":"Southern Grampians Shire of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Southern Grampians Shire of","Levy_return_year":"2012"}
    , {"count_builds":"3","shirename":"Southern Grampians Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Southern Grampians Shire of","Levy_return_year":"2014"}
    , {"count_builds":"17","shirename":"Stonnington City of","Levy_return_year":"2009"}
    , {"count_builds":"15","shirename":"Stonnington City of","Levy_return_year":"2010"}
    , {"count_builds":"9","shirename":"Stonnington City of","Levy_return_year":"2011"}
    , {"count_builds":"12","shirename":"Stonnington City of","Levy_return_year":"2012"}
    , {"count_builds":"17","shirename":"Stonnington City of","Levy_return_year":"2013"}
    , {"count_builds":"5","shirename":"Stonnington City of","Levy_return_year":"2014"}
    , {"count_builds":"3","shirename":"Strathbogie Shire of","Levy_return_year":"2009"}
    , {"count_builds":"11","shirename":"Strathbogie Shire of","Levy_return_year":"2010"}
    , {"count_builds":"6","shirename":"Strathbogie Shire of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Strathbogie Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Strathbogie Shire of","Levy_return_year":"2014"}
    , {"count_builds":"26","shirename":"Surf Coast Shire of","Levy_return_year":"2009"}
    , {"count_builds":"24","shirename":"Surf Coast Shire of","Levy_return_year":"2010"}
    , {"count_builds":"13","shirename":"Surf Coast Shire of","Levy_return_year":"2011"}
    , {"count_builds":"12","shirename":"Surf Coast Shire of","Levy_return_year":"2012"}
    , {"count_builds":"6","shirename":"Surf Coast Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Surf Coast Shire of","Levy_return_year":"2014"}
    , {"count_builds":"10","shirename":"Swan Hill Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"6","shirename":"Swan Hill Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Swan Hill Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"3","shirename":"Swan Hill Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"7","shirename":"Swan Hill Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Towong Shire of","Levy_return_year":"2010"}
    , {"count_builds":"2","shirename":"Towong Shire of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Towong Shire of","Levy_return_year":"2012"}
    , {"count_builds":"1","shirename":"Towong Shire of","Levy_return_year":"2013"}
    , {"count_builds":"9","shirename":"Wangaratta Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"10","shirename":"Wangaratta Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"3","shirename":"Wangaratta Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"2","shirename":"Wangaratta Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"8","shirename":"Wangaratta Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"4","shirename":"Wangaratta Rural City of","Levy_return_year":"2014"}
    , {"count_builds":"13","shirename":"Warrnambool City of","Levy_return_year":"2009"}
    , {"count_builds":"10","shirename":"Warrnambool City of","Levy_return_year":"2010"}
    , {"count_builds":"16","shirename":"Warrnambool City of","Levy_return_year":"2011"}
    , {"count_builds":"11","shirename":"Warrnambool City of","Levy_return_year":"2012"}
    , {"count_builds":"15","shirename":"Warrnambool City of","Levy_return_year":"2013"}
    , {"count_builds":"2","shirename":"Warrnambool City of","Levy_return_year":"2014"}
    , {"count_builds":"20","shirename":"Wellington Shire of","Levy_return_year":"2009"}
    , {"count_builds":"12","shirename":"Wellington Shire of","Levy_return_year":"2010"}
    , {"count_builds":"21","shirename":"Wellington Shire of","Levy_return_year":"2011"}
    , {"count_builds":"15","shirename":"Wellington Shire of","Levy_return_year":"2012"}
    , {"count_builds":"9","shirename":"Wellington Shire of","Levy_return_year":"2013"}
    , {"count_builds":"1","shirename":"Wellington Shire of","Levy_return_year":"2014"}
    , {"count_builds":"2","shirename":"West Wimmera Shire of","Levy_return_year":"2013"}
    , {"count_builds":"34","shirename":"Whitehorse City of","Levy_return_year":"2009"}
    , {"count_builds":"38","shirename":"Whitehorse City of","Levy_return_year":"2010"}
    , {"count_builds":"54","shirename":"Whitehorse City of","Levy_return_year":"2011"}
    , {"count_builds":"29","shirename":"Whitehorse City of","Levy_return_year":"2012"}
    , {"count_builds":"34","shirename":"Whitehorse City of","Levy_return_year":"2013"}
    , {"count_builds":"13","shirename":"Whitehorse City of","Levy_return_year":"2014"}
    , {"count_builds":"162","shirename":"Whittlesea City of","Levy_return_year":"2009"}
    , {"count_builds":"90","shirename":"Whittlesea City of","Levy_return_year":"2010"}
    , {"count_builds":"99","shirename":"Whittlesea City of","Levy_return_year":"2011"}
    , {"count_builds":"187","shirename":"Whittlesea City of","Levy_return_year":"2012"}
    , {"count_builds":"81","shirename":"Whittlesea City of","Levy_return_year":"2013"}
    , {"count_builds":"32","shirename":"Whittlesea City of","Levy_return_year":"2014"}
    , {"count_builds":"29","shirename":"Wodonga Rural City of","Levy_return_year":"2009"}
    , {"count_builds":"13","shirename":"Wodonga Rural City of","Levy_return_year":"2010"}
    , {"count_builds":"25","shirename":"Wodonga Rural City of","Levy_return_year":"2011"}
    , {"count_builds":"28","shirename":"Wodonga Rural City of","Levy_return_year":"2012"}
    , {"count_builds":"45","shirename":"Wodonga Rural City of","Levy_return_year":"2013"}
    , {"count_builds":"10","shirename":"Wodonga Rural City of","Levy_return_year":"2014"}
    , {"count_builds":"129","shirename":"Wyndham City of","Levy_return_year":"2009"}
    , {"count_builds":"60","shirename":"Wyndham City of","Levy_return_year":"2010"}
    , {"count_builds":"76","shirename":"Wyndham City of","Levy_return_year":"2011"}
    , {"count_builds":"177","shirename":"Wyndham City of","Levy_return_year":"2012"}
    , {"count_builds":"53","shirename":"Wyndham City of","Levy_return_year":"2013"}
    , {"count_builds":"21","shirename":"Wyndham City of","Levy_return_year":"2014"}
    , {"count_builds":"12","shirename":"Yarra City of","Levy_return_year":"2009"}
    , {"count_builds":"9","shirename":"Yarra City of","Levy_return_year":"2010"}
    , {"count_builds":"9","shirename":"Yarra City of","Levy_return_year":"2011"}
    , {"count_builds":"7","shirename":"Yarra City of","Levy_return_year":"2012"}
    , {"count_builds":"13","shirename":"Yarra City of","Levy_return_year":"2013"}
    , {"count_builds":"4","shirename":"Yarra City of","Levy_return_year":"2014"}
    , {"count_builds":"52","shirename":"Yarra Ranges Shire of","Levy_return_year":"2009"}
    , {"count_builds":"44","shirename":"Yarra Ranges Shire of","Levy_return_year":"2010"}
    , {"count_builds":"44","shirename":"Yarra Ranges Shire of","Levy_return_year":"2011"}
    , {"count_builds":"38","shirename":"Yarra Ranges Shire of","Levy_return_year":"2012"}
    , {"count_builds":"47","shirename":"Yarra Ranges Shire of","Levy_return_year":"2013"}
    , {"count_builds":"10","shirename":"Yarra Ranges Shire of","Levy_return_year":"2014"}
    , {"count_builds":"1","shirename":"Yarriambiack Shire of","Levy_return_year":"2010"}
    , {"count_builds":"1","shirename":"Yarriambiack Shire of","Levy_return_year":"2011"}
    , {"count_builds":"1","shirename":"Yarriambiack Shire of","Levy_return_year":"2012"}
];