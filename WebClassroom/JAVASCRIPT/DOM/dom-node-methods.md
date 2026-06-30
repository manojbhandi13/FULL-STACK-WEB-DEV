# DOM Node Manipulation Methods

Notes on adding and removing nodes in the DOM — covering both the older
methods (`appendChild`, `removeChild`) and the newer ones
(`append`, `prepend`, `before`, `after`, `remove`).

---

## appendChild()

Adds a node as the **last child** of a parent element. Only accepts actual
DOM nodes — not plain text strings.

```html
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

```javascript
const list = document.getElementById("list");

// Create a new li element
const newItem = document.createElement("li");
newItem.innerText = "JavaScript";

// Append it as the last child
list.appendChild(newItem);
```

Result:

```html
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

---

## removeChild()

Removes a specific child node from its parent. Must be called **on the
parent**, passing in the child to remove — not called directly on the
element you want gone.

```javascript
const list = document.getElementById("list");
const firstItem = list.firstElementChild; // <li>HTML</li>

list.removeChild(firstItem);
```

Result:

```html
<ul id="list">
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

---

## appendChild() vs append()

```javascript
// appendChild — only accepts a Node, returns the appended node
list.appendChild(newItem);

// append — accepts a Node OR plain text, returns undefined
list.append(newItem);
list.append("Just plain text"); // works with append, fails with appendChild
```

```javascript
list.appendChild("Just text"); // ❌ Throws an error — not a Node
list.append("Just text");      // ✅ Works fine
```

---

## removeChild() vs remove()

```javascript
// Old way — removeChild — must be called on the PARENT
parent.removeChild(child);

// Modern way — remove — called directly on the element itself
child.remove();
```

```javascript
const firstItem = list.firstElementChild;

// Old way
list.removeChild(firstItem);

// Modern way — simpler
firstItem.remove();
```

---

## Why Learn The Older Methods At All

`appendChild()` and `removeChild()` are older DOM methods (pre-ES6) while
`append()`, `prepend()`, `before()`, `after()`, and `remove()` are newer,
more flexible additions.

They still show up frequently in:

- Older codebases
- Interview questions
- Tutorials and Stack Overflow answers that predate the newer methods

Understanding both means being able to read DOM code regardless of when
it was written.

---

## Complete Comparison Table

| Old Method          | Newer Equivalent      | Key Difference                          |
|----------------------|------------------------|------------------------------------------|
| `appendChild(node)`  | `append(node or text)` | `append` also accepts plain text         |
| `removeChild(node)`  | `node.remove()`        | `remove` is called directly on the element |
| —                    | `prepend(node)`        | Adds as the first child                  |
| —                    | `before(node)`         | Inserts before the element                |
| —                    | `after(node)`          | Inserts after the element                 |
