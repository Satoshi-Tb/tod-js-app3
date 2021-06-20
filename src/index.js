import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);

    //完了リストに追加
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "list-row";

    const p = document.createElement("p");
    p.innerText = inputText;

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {});

    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(returnButton);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)の、さらに親(li)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);

  //console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
