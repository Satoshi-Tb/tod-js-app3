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
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode; //div要素取得
    const text = addTarget.firstElementChild.innerText; //TODO文字列取得

    //div以下を初期化
    addTarget.textContent = null;

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {});

    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)の、さらに親(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(li);

  //console.log(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
