# API documentation

## getAllProjects()

Returns a promise with the data. ⚠️ **Must be called in an async function**
```js
const data = await fakeApi.getAllProjects();
```

## getProject(id)
Returns a promise with the selected project. ⚠️ **Must be called in an async function**

It needs an argument: the id of the selected project
```js
const data = await fakeApi.getProject(id);
```

### Data model

Each document has the following properties:

```js
  {
    title: "String",
    description: "String",
    _id: 1, //number
  }
```