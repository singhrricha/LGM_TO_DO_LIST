# LGM_TO_DO_LIST
The code starts by using the document.getElementsByTagName() method to select all the <li> elements on the page and store them in the tagList variable. A for loop is then used to iterate through each element in the tagList array.

Within the for loop, a new span element is created using the document.createElement() method, and a cross variable is assigned to the text node for the multiplication symbol (Unicode value \u00D7). The cross text node is then appended to the span element using the appendChild() method. The span element is given a class name of "pull-right close" using the className property. Finally, the span element is appended to the current <li> element using the appendChild() method.

The code then uses the document.getElementsByClassName() method to select all the elements with a class name of "close" and store them in the close variable. Another for loop is used to iterate through each element in the close array.

Within the for loop, an event listener is attached to the onclick event of each close element. When a close element is clicked, the code selects its parent element using the parentElement property, and sets its display CSS property to "none" to remove it from the page.

The code then uses the document.getElementsByClassName() method again to select all the elements with a class name of "pencil" and store them in the pencil variable. Another for loop is used to iterate through each element in the pencil array.

Within the for loop, an event listener is attached to the onclick event of each pencil element. When a pencil element is clicked, the code selects its parent element using the parentElement property, and retrieves the text content of its first child node using the textContent property. A new input element is then created using the document.createElement() method, and its value property is set to the text content retrieved earlier. Finally, the new input element is logged to the console.

The code then uses the document.querySelector() method to select the first <ul> element on the page, and attaches an event listener to it using the addEventListener() method. When an element within the <ul> is clicked, the event listener checks if the clicked element is an <li> element using the tagName property. If it is, the code toggles the checked class on the element using the classList.toggle() method.

The code then defines a btnAddItem() function, which is called when the user clicks the "Add" button on the page. Within the function, a new <li> element is created using the document.createElement() method, and the text entered in the input field is retrieved using the getElementById() method. A new text node is then created using the document.createTextNode() method, and the input text is passed to it as an argument. The text node is appended to the <li> element using the appendChild() method, and the <li> element is given a class name of "list-group-item". The input field is then cleared using the value property.

If the input field was left blank, an alert message is displayed to the user. Otherwise, the new <li> element is appended to the <ul> element using the appendChild() method. Another span element is then created and given a class name of "close". A
