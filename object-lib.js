/*
@filename:object-lib.js
@author:Zia haider
@created on:12-09-2016
*/
$.fn.serializeObject=function(){
                var tempObj={};
                $(this).find('[name]').each(function(){
                    var name=$(this).attr('name');
                    var value=$(this).val();
                    
                    var keyPath=name.split('->');
                    createObject(tempObj, keyPath, value);
                });

                return tempObj;
            }

            function createObject(obj, keyPath, value) {
                lastKeyIndex = keyPath.length-1;
                for (var i = 0; i < lastKeyIndex; ++ i) {
                    key = keyPath[i];
                    if (!(key in obj))
                    obj[key] = {}
                    obj = obj[key];
                }
                obj[keyPath[lastKeyIndex]] = value;
            }
