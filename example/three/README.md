## 任务

- [ ] 使用 vue-cli 创建基于 vue3 的项目
    - [ ] 测试框架选择 jest
- [ ] 可以在 vscode 内通过断点 debugger 测试

## 要求
- [ ] 写出 @vue/cli-plugin-unit-jest 每个字段的含义
- [ ] 画出 vtu 的架构图

## 收获

- 理解通过 vue-cli 创建的 jest.config.js
- 理解 vtu 的工作原理
- 理解 shallowMount 和 mount 的区别点
- 学会 debugger 指定测试

## 理解
### shallowMount 和 mount 的区别

shallowMount 与 mount 的主要作用是一致的, 都是挂载一个组件返回一个包装器对象。shallowMount 是浅挂载, 只会渲染根组件的 template 内容, 不会渲染根组件的任何子组件渲染。而 mount 是将当前组件全部解析和挂载。

#### shallowMount
针对某个上层组件进行测试，可以不用渲染它的子组件，所以就不用再担心子组件的表现和行为，这样就可以只对特定组件的逻辑及其渲染输出进行测试了。
浅渲染在将一个组件作为一个测试单元进行测试时非常有用，只会渲染出组件的第一层 DOM 结构，其嵌套的子组件不会被渲染出来，从而使得渲染的效率更高，
测试单元的速度也更快。

child.vue
```html
<template>
  <div>child</div>
</template>
```

parent.vue
```html
<template>
  <div>
    parent
    <Child></Child>
  </div>
</template>
```

```js
   const wrapper = shallowMount(Parent);
   console.log(wrapper.html());
   /**
    *  <div> parent <child-stub></child-stub></div>
    */


   const wrapper = mount(Parent);
   console.log(wrapper.html());
   /**
    * <div> parent <div>child</div></div>
    */
```

