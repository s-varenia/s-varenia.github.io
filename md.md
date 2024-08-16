# Markdown (md) синтаксис

Markdown (произносится маркда́ун) — облегчённый язык разметки, созданный с целью обозначения форматирования в простом тексте, с максимальным сохранением его читаемости человеком, и пригодный для машинного преобразования в языки для продвинутых публикаций (HTML, Rich Text и других).  
Официальная документация по ссылке: https://daringfireball.net/projects/markdown/syntax

## Заголовок

<!-- tags: заголовок, markdown, md -->

Чтобы создать заголовок, добавьте знаки номера `#` перед словом или фразой. Количество используемых вами цифровых знаков должно соответствовать уровню заголовка. Например, чтобы создать заголовок третьего уровня `<h3>`, используйте три цифровых знака (например, `### Мой заголовок`).

!> Заголовок должен начинаться с новой строки, перед символом `#` не должно быть пробелов и с отступами сверху и снизу.

#### Синтаксис markdown (md):

```md
# Заголовок H1

## Заголовок H2

### Заголовок H3

#### Заголовок H4

##### Заголовок H5

###### Заголовок H6
```

#### HTML результат (стандартный):

```html
<h1>Заголовок H1</h1>
<h2>Заголовок H2</h2>
<h3>Заголовок H3</h3>
<h4>Заголовок H4</h4>
<h5>Заголовок H5</h5>
<h6>Заголовок H6</h6>
```

#### HTML результат **Docsify** генератора:

```html
<h1 id="Заголовок-h1">
	<a href="#/markdown?id=%d0%97%d0%b0%d0%b3%d0%be%d0%bb%d0%be%d0%b2%d0%be%d0%ba-h1" data-id="Заголовок-h1" class="anchor">
		<span>Заголовок H1</span>
	</a>
</h1>
```

Альтернативный способ добавления заголовка первого и второго уровня:

```
Заголовок H1
===

Заголовок H2
---
```

## Параграф

<!-- tags: параграф, markdown, md -->

Для того, чтобы создать параграф с использованием синтаксиса языка Markdown, достаточно отделить строки текста одной (или более) пустой строкой (пустой считается всякая строка, которая не содержит в себе ничего, кроме пробелов и символов табуляции).

!> Для того, чтобы вставить видимый перенос строки, элемент `<br>`, необходимо окончить строку двумя пробелами и нажатием клавиши «Enter».

#### Синтаксис markdown (md):

```md
Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
```

#### HTML результат (стандартный):

```html
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
```

## Цитата

<!-- tags: цитата, markdown, md -->

Чтобы создать цитату, добавьте `>` перед абзацем.

!> Цитаты могут содержать несколько абзацев. Добавьте `>` на пустые строки между абзацами.  
Цитаты могут быть вложенными. Добавьте `>>` перед абзацем, который вы хотите вложить.  
Цитаты могут содержать другие элементы в формате Markdown. Не все элементы можно использовать — вам нужно будет поэкспериментировать, чтобы увидеть, какие из них работают.

#### Синтаксис markdown (md):

```md
> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
>
> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
```

#### HTML результат (стандартный):

```html
<blockquote>
	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
	<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
</blockquote>
```

## Список

<!-- tags: список, markdown, md -->

Чтобы создать неупорядоченный список, добавьте тире `-`, звездочки `*` или плюс `+` перед элементами строки. Сделайте отступ для одного или нескольких элементов, чтобы создать вложенный список.

!> Если вам нужно начать элемент неупорядоченного списка с числа, за которым следует точка, вы можете использовать обратную косую черту `\`, чтобы экранировать точку.

#### Синтаксис markdown (md):

```md
- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item
```

#### HTML результат (стандартный):

```html
<ul>
	<li>First item</li>
	<li>Second item</li>
	<li>
		Third item
		<ul>
			<li>Indented item</li>
			<li>Indented item</li>
		</ul>
	</li>
	<li>Fourth item</li>
</ul>
```

## Список нумерованный

<!-- tags: список нумерованный, markdown, md -->

Чтобы создать упорядоченный список, добавьте позиции с номерами, за которыми следуют точки. Номера не обязательно должны быть в порядке цифр, но список должен начинаться с единицы.

!> Точка и пробел, после номера, обязателен.

#### Синтаксис markdown (md):

```md
1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item
```

#### HTML результат (стандартный):

```html
<ol>
	<li>First item</li>
	<li>Second item</li>
	<li>
		Third item
		<ol>
			<li>Indented item</li>
			<li>Indented item</li>
		</ol>
	</li>
	<li>Fourth item</li>
</ol>
```

## Таблица

<!-- tags: таблица, markdown, md -->

Чтобы добавить таблицу, используйте три или более дефиса `---` для создания заголовка каждого столбца и используйте вертикальную черту `|` для разделения каждого столбца. Для совместимости вы также должны добавить `|` в каждый конце ряда.

!> Объединение ячеек отсутствует.

#### Синтаксис markdown (md):

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

#### HTML результат (стандартный):

```html
<table>
	<thead>
		<tr>
			<th>Syntax</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Header</td>
			<td>Title</td>
		</tr>
		<tr>
			<td>Paragraph</td>
			<td>Text</td>
		</tr>
	</tbody>
</table>
```

Вы можете выровнять текст в столбцах по левому, правому краю или по центру, добавив двоеточие (:) слева, справа или с обеих сторон дефиса в строке заголовка.

```md
| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |
```

## Ссылка

Чтобы создать ссылку, заключите текст ссылки в квадратные скобки (например, `[Title url]`), а затем сразу же укажите URL-адрес в скобках (например, `(https://exemple.com)`).

<!-- tags: ссылка, markdown, md -->

!> Для совместимости необходимо кодировать любые пробелы в URL с помощью `%20`. В качестве альтернативы, если ваше приложение Markdown поддерживает HTML, вы можете использовать тег HTML.

#### Синтаксис markdown (md):

```md
[Url name](https://exemple.com 'Title text')
```

#### HTML результат (стандартный):

```html
<a href="https://exemple.com" title="Title text">Url name</a>
```

#### HTML результат **Docsify** генератора:

```html
<a href="https://exemple.com" target="_blank" rel="noopener" title="Title text">Title url</a>
```

Ссылки в справочном стиле позволяют обращаться к ссылкам по именам, которые вы определяете в другом месте документа:

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ 'Google'
[2]: http://search.yahoo.com/ 'Yahoo Search'
[3]: http://search.msn.com/ 'MSN Search'
```

## Изображение

<!-- tags: изображение, картинка, markdown, md -->

Чтобы добавить изображение, добавьте восклицательный знак `!`, альтернативный текст в квадратных скобках (он станет содержимым атрибута `alt` в элементе img) и путь или URL-адрес ресурса изображения в овальных скобках. При желании вы можете добавить заголовок в кавычках после пути или URL-адреса.

!> Чтобы добавить ссылку на изображение, заключите Markdown для изображения в квадратные скобки, а затем добавьте ссылку в круглых скобках.

#### Синтаксис markdown (md):

```md
![Alternative text](https://www.exemple.com/image.png 'Image title')
```

#### HTML результат (стандартный):

```html
<img src="https://www.exemple.com/image.png" alt="Alternative text" title="Image title" />
```

#### HTML результат **Docsify** генератора:

```html
<img src="https://www.exemple.com/image.png" data-origin="https://www.exemple.com/image.png" alt="Alternative text" title="Image title" />
```

## Разделительная линия

<!-- tags: линия, разделитель, markdown, md -->

Чтобы создать горизонтальную линию (разделитель), используйте три или более звездочек `***`, дефисов `---` или подчеркиваний `___` в строке.

!> Для совместимости поставьте пустые строки до и после горизонтальных линий (разделителей).

#### Синтаксис markdown (md):

<!-- prettier-ignore -->
```md
---

***

____________
```

#### HTML результат (стандартный):

```html
<hr />
<hr />
<hr />
```

## Код в блоке

<!-- tags: код, блочный, markdown, md -->

Чтобы обозначить блок кода, заключите его в три обратные кавычки ` ``` `, для указания языка кода необходимо после первых трех обратных кавычек указать без пробела название ` ```javascript `.

!> Три обратные кавычки в начале и в конце должны бить в отдельной строке.

#### Синтаксис markdown (md):

````md
```javascript
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
```
````

#### HTML результат (стандартный):

```html
<pre>
	<code>
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
	</code>
</pre>
```

#### HTML результат **Docsify** генератора:

```html
<pre v-pre="" data-lang="javascript">
	<code class="lang-javascript">
		{
		"firstName": "John",
		"lastName": "Smith",
		"age": 25
		}
	</code>
</pre>
```

## Код в строке

<!-- tags: код, markdown, md -->

Чтобы обозначить слово или фразу как код в строке, заключите его в обратные кавычки `` `code` ``.

!> Если слово или фраза, которые вы хотите обозначить как код, содержат одну или несколько обратных кавычек, для их отображения необходимо заключить слово или фразу в двойные обратные кавычки ``.

#### Синтаксис markdown (md):

```md
At the command prompt, type `nano`.
```

#### HTML результат (стандартный):

```html
At the command prompt, type <code>nano</code>.
```

## Текст жирный

<!-- tags: жирный, начертание, markdown, md -->

Чтобы выделить текст жирным шрифтом, добавьте две звездочки или символы подчеркивания до и после слова или фразы. Чтобы выделить середину слова жирным шрифтом, добавьте две звездочки без пробелов вокруг букв.

!> Для совместимости используйте звездочки, чтобы выделить середину слова жирным шрифтом.

#### Синтаксис markdown (md):

<!-- prettier-ignore -->
```md
I just love **bold text**.  
I just love __bold text__.  
Love**is**bold
```

#### HTML результат (стандартный):

```html
I just love <strong>bold text</strong>.
<br />
I just love <strong>bold text</strong>.
<br />
Love<strong>is</strong>bold
```

## Текст курсив (под наклоном)

<!-- tags: курсив, под наклоном, markdown, md -->

Чтобы выделить текст курсивом, добавьте одну звездочку или подчеркивание до и после слова или фразы. Чтобы выделить середину слова курсивом, добавьте одну звездочку без пробелов вокруг букв.

!> Для совместимости используйте звездочки, чтобы выделить середину слова курсивом.

#### Синтаксис markdown (md):

<!-- prettier-ignore -->
```md
Italicized text is the *cat's meow*.  
Italicized text is the _cat's meow_.  
A*cat*meow
```

#### HTML результат (стандартный):

```html
Italicized text is the <em>cat's meow</em>.
<br />
Italicized text is the <em>cat's meow</em>.
<br />
A<em>cat</em>meow
```

## Текст жирный курсив

<!-- tags: жирный курсив, картинка, markdown, md -->

Чтобы выделить текст жирным шрифтом и курсивом одновременно, добавьте три звездочки или знака подчеркивания до и после слова или фразы. Чтобы выделить середину слова полужирным шрифтом и выделить его курсивом, добавьте три звездочки без пробелов вокруг букв.

#### Синтаксис markdown (md):

<!-- prettier-ignore -->
```md
This text is ***really important***.  
This text is ___really important___.  
This text is __*really important*__.  
This text is **_really important_**.  
This is really**_very_**important text.
```

#### HTML результат (стандартный):

<!-- prettier-ignore -->
```html
This text is <strong><em>really important</em></strong>.
<br />
This text is <strong><em>really important</em></strong>.
<br />
This text is <strong><em>really important</em></strong>.
<br />
This text is <strong><em>really important</em></strong>.
<br />
This is really**<em>very**</em>important text.
```

## Текст зачеркнутый

<!-- tags: зачеркнутый, перечеркнутый, markdown, md -->

Вы можете зачеркнуть слова, добавив две волнистые линии `~~` до и после слова или фразы.

#### Синтаксис markdown (md):

```md
~~The world is flat.~~ We now know that the world is round.
```

#### HTML результат (стандартный):

```html
<del>The world is flat.</del> We now know that the world is round.
```

## Перенос строки

<!-- tags: перенос строки, markdown, md -->

Для того, чтобы вставить видимый перенос строки, элемент `<br>`, необходимо окончить строку двумя пробелами и нажатием клавиши «Enter».

#### Синтаксис markdown (md):

```md
This is the first line.  
And this is the second line.
```

#### HTML результат (стандартный):

```html
<p>
	This is the first line.<br />
	And this is the second line.
</p>
```

## Экранирование символов

<!-- tags: экранирование, markdown, md -->

Вы можете использовать обратную косую черту, чтобы экранировать следующие символы.

!> Если слово или фраза, которые вы хотите обозначить как код, содержат одну или несколько обратных кавычек, для их отображения необходимо заключить слово или фразу в двойные обратные кавычки ``.

| Символ  | Название             |
| ------- | -------------------- |
| `\`     | слеш                 |
| `` ` `` | обратный апостроф    |
| `*`     | звездочка            |
| `_`     | символ подчеркивания |
| `{}`    | фигурные скобки      |
| `[]`    | квадратные скобки    |
| `()`    | круглые скобки       |
| `#`     | символ решетки       |
| `+`     | плюс                 |
| `-`     | минус (дефис)        |
| `.`     | точка                |
| `!`     | восклицательный знак |

## Списки задач

<!-- tags: список задач, markdown, md -->

Списки задач (также называемые контрольными списками и списками дел) позволяют вам создать список элементов с флажками. В приложениях Markdown, поддерживающих списки задач, рядом с содержимым будут отображаться флажки. Чтобы создать список задач, добавьте тире `-` и квадратные скобки с пробелом `[ ]` перед элементами списка задач. Чтобы установить флажок, добавьте x между скобками `[x]`.

!> Результат **Docsify** генератора

#### Синтаксис markdown (md):

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

#### HTML результат **Docsify** генератора:

```html
<ul class="task-list">
	<li class="task-list-item">
		<label><input checked="" disabled="" type="checkbox" /> Write the press release</label>
	</li>
	<li class="task-list-item">
		<label><input disabled="" type="checkbox" /> Update the website</label>
	</li>
	<li class="task-list-item">
		<label><input disabled="" type="checkbox" /> Contact the media</label>
	</li>
</ul>
```

## Emoji

<!-- tags: emoji, markdown, md -->

There are two ways to add emoji to Markdown files: copy and paste the emoji into your Markdown-formatted text, or type emoji shortcodes. Список кодов emoji генератора markdown **Docsify** по ссылке: https://docsify.js.org/#/emoji

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
Hello World! :sunny:
```

#### HTML результат **Docsify** генератора:

```html
Hello World! <img src="https://github.githubassets.com/images/icons/emoji/unicode/2600.png?v8.png" alt="sunny" class="emoji" loading="lazy" />
```

## Важный контент

<!-- tags: важный контент, markdown, md -->

Выделение текста с особыми стилями.

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
!> **Time** is money, my friend!
```

#### HTML результат **Docsify** генератора:

```html
<p class="tip"><strong>Time</strong> is money, my friend!</p>
```

## Основной совет

<!-- tags: , markdown, md -->

Выделение текста с особыми стилями.

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
?> _TODO_ unit test
```

#### HTML результат **Docsify** генератора:

```html
<p class="warn"><em>TODO</em> unit test</p>
```

## Игнорировать компиляцию ссылки

<!-- tags: , markdown, md -->

В некоторый момент времени вам понадобится добавить какой-то другой относительный путь к ссылке, вам нужно будет сообщить, что вам не нужно компилировать эту ссылку. Например:

```md
[link](/demo/)
```

Он будет скомпилирован в `<a href="/#/demo/">link</a>` и будет загружен `/demo/README.md`. Может быть, вы хотите перейти на `/demo/index.html`.

Теперь вы можете сделать это добавив `:ignore` в title. Вы получите html `<a href="/demo/">link</a>`. Не волнуйтесь, вы все равно сможете установить заголовок для ссылки.

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
[link](/demo/ ':ignore title')
```

#### HTML результат **Docsify** генератора:

```html
<a href="/demo/" target="_blank" rel="noopener" title="title">link</a>
```

## Атрибут для ссылки

<!-- tags: атрибут для ссылки, markdown, md -->

Установить целевой атрибут для ссылки

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
[link](/demo ':target=_blank')  
[link](/demo2 ':target=_self')
```

## Отключить ссылку

<!-- tags: отключить ссылку, markdown, md -->

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

#### Синтаксис markdown (md):

```md
[link](/demo ':disabled')
```

## Игнорирование заголовков

Каждый заголовок автоматически добавляется к оглавлению по умолчанию. Если вы хотите игнорировать определённый заголовок, добавьте `{docsify-ignore}`

!> Результат **Docsify** генератора, который расширяет синтаксис Markdown.

```md
# Начало работы

## Заголовок {docsify-ignore}

Этот заголовок не будет отображаться в оглавлении боковой панели.
```

Чтобы игнорировать все заголовки на определенной странице, вы можете использовать `{docsify-ignore-all}` в первом заголовке страницы.

```md
# Начало работы {docsify-ignore-all}

## Заголовок

Все заголовки не будут отображаться в таблице содержимого боковой панели.
```

## Результат всех элементов

# Заголовок H1 {docsify-ignore}

## Заголовок H2 {docsify-ignore}

### Заголовок H3 {docsify-ignore}

#### Заголовок H4 {docsify-ignore}

##### Заголовок H5 {docsify-ignore}

###### Заголовок H6 {docsify-ignore}

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
>
> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item

| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |

| Syntax    | Description |   Test Text |
| :-------- | :---------: | ----------: |
| Header    |    Title    | Here's this |
| Paragraph |    Text     |    And more |

[Url name](https://exemple.com 'Title text')

![Alternative text](https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png 'Image title')

---

```javascript
{
"firstName": "John",
"lastName": "Smith",
"age": 25
}
```

At the command prompt, type `nano`.

I just love **bold text**.  
I just love **bold text**.  
Love**is**bold

Italicized text is the _cat's meow_.  
Italicized text is the _cat's meow_.  
A*cat*meow

This text is **_really important_**.  
This text is **_really important_**.  
This text is **_really important_**.  
This text is **_really important_**.  
This is really**_very_**important text.

~~The world is flat.~~ We now know that the world is round.

This is the first line.  
And this is the second line.

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Hello World! :sunny:

!> **Time** is money, my friend!

?> _TODO_ unit test
