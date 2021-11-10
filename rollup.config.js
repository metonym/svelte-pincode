import svelteReadme from "svelte-readme";

export default svelteReadme({
  style: `
    [data-pincode], [data-pincode] ~ div {
      margin-bottom: 16px;
    }

    .complete {
      font-weight: 700;
    }

    .success {
      color: #24a148;
    }

    .error {
      color: #da1e28;
    }
 `,
});
