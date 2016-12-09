# SerializeObject
SerializeObject is a jQuery plugin it will serialize html form data in to a Javascript object with the help of single function.

# Sample HTML file
<html>
    <head>
        <title>JSON Lib</title>
        <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
        <script src="object-lib.js"></script>
    </head>
    <body>
        <form name="frm" method="post">
            <label for="profile->name">Name:</label><br/>
            <input type="text" name="profile->name"/><br/>

            <label for="profile->email">Email:</label><br/>
            <input type="text" name="profile->email"/><br/>
            
            <label for="profile->phone">Phone:</label><br/>
            <input type="text" name="profile->phone"/><br/>
            
            <label for="profile->address->street1">Street1:</label><br/>
            <input type="text" name="profile->address->street1"/><br/>
            
            <label for="profile->address->street2">Street2:</label><br/>
            <input type="text" name="profile->address->street2"/><br/>
            
            <label for="profile->address->zipcode">Zipcode:</label><br/>
            <input type="text" name="profile->address->zipcode"/><br/>
            
            <label for="profile->address->city">City:</label><br/>
            <input type="text" name="profile->address->city"/><br/>
            
            <label for="profile->address->country">Country:</label><br/>
            <input type="text" name="profile->address->country"/><br/>
        </form>
    </body>
</html>

