# Markdown синтаксис

---

# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6

```md
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6
```

```html
<h1>Заголовок 1</h1>
<h2>Заголовок 2</h2>
<h3>Заголовок 3</h3>
<h4>Заголовок 4</h4>
<h5>Заголовок 5</h5>
<h6>Заголовок 6</h6>
```

---

### My Great Heading {#custom-id}

---

Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.

---

**Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.**

---

***Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.***

---

*Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.*

---

~~Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.~~

---

>Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.

---

I need to highlight these ==very important words==.

---

1. Первый
1. Второй
1. тест
1. Третий
	- Первый
	+ Второй
	* Третий

---

First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

---

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

---

[Ссылка](https://www.example.com)

---

Ссылка внутри страницы [ссылка](#link)

---

![Это картинка](https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png)

---

![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY
SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)

---

Внутри текста **[ссылка](https://www.google.com/)**

---

`code`

---

```
function hello()
{
	alert('Hello!');
}
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

---

\```

---

Переменная как ссылка [md-spec]

![Alt text][id]
![Alt text][id2]

this text needs to be separated from the references by 2 newlines

---

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

---

H~2~O

X^2^

---

`http://www.example.com`

<fake@example.com>

<https://www.markdownguide.org>

[md-spec]: http://daringfireball.net/projects/markdown/
[id]:
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D
AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=
[id2]:
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7D
AcdvqGQAAAAYSURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=