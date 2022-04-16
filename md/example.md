# Markdown синтаксис

Документация: [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)

---

# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
##### Заголовок 5
###### Заголовок 6

---

#### Заголовок 4 {test1}

---

[Внутренняя ссылка на заголовок 4](#test1)

---

Ipsum является стандартной "рыбой" для текстов на латинице 
с начала XVI века. Ipsum является стандартной "рыбой" 
для текстов на латинице с начала XVI века.

Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.

---

*Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.*

---

**Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.**

---

***Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.***

---

~~Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.~~

---

> Цытата. Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.

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

Изображение в формате **base64**:

![Alt text](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7l
jmRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAY
SURBVBhXYwCC/2AAZYEoOAMs8Z+BgQEAXdcR7/Q1gssAAAAASUVORK5CYII=)

---

![image](https://github.com/s-varenia/s-varenia.github.io/raw/master/img/Sat_Apr_16_2022_1650116069107.png)

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