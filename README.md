# SerializeObject
SerializeObject is a jQuery plugin it will serialize html form data in to a Javascript object with the help of a single function.

## Syntax:
$('form').serializeObject();

## Usage:
This is a jQuery plugin so, you must first link a jquery file in your code
and then object-lib.js.

There is a certain pattern for elements to make this library fully functioning.
Each element name must be declared as an object and its property for example:
if we have a form for user profile which contains two fields <b>Name</b> and <b>Email</b>
The attribute name of field <b>Name</b> should be like: profile->name<br/>
And the attribute name of field <b>Email</b> should be like: profile->email.<br/>
The '->' symbol is a separator between object and property.

## Sample HTML form:
```html
<form name="frm" method="post">
  <label for="profile->name">Name:</label><br/>
  <input type="text" name="profile->name"/><br/>

  <label for="profile->email">Email:</label><br/>
  <input type="text" name="profile->email"/><br/>      
  
  <br/>
  <input type="button" value="Serialize Object" onclick="getObject()"/><br/>  
</form>
<script>
    function getObject(){
        var obj=$('form').serializeObject();
        $('#txtResult').val(JSON.stringify(obj));
    }
</script>
```

