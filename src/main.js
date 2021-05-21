const template = `<div>
<h1>{{title}}</h1>
</div><p>{{date}}</p>
`;

const data = function data() {
  return {
    title: "Sooyoung's VUEtiful Web Page",
    date: "Thu May 20",
  };
};

const App = {
  data,
  template,
};
const app = Vue.createApp(App).mount("#vue-app");
