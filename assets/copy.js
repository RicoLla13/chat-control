document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('pre > code').forEach(codeBlock => {
    const pre = codeBlock.parentNode;

    // Wrap <pre> in container
    const container = document.createElement("div");
    container.className = "code-block";
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);

    // Add button
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.innerText = "Copy";
    container.appendChild(button);

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => { button.innerText = "Copy"; }, 2000);
      });
    });
  });
});
