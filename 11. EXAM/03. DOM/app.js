window.addEventListener("load", solve);

function solve() {
  let addBtn = document.getElementsByClassName("add-btn")[0];
  let originalName = document.getElementById("snowman-name");
  let originalHeight = document.getElementById("snowman-height")
  let originalLocation = document.getElementById("location")
  let originalCreator = document.getElementById("creator-name")
  let originalAttribute = document.getElementById("special-attribute")
  addBtn.addEventListener("click", submitToPreview);

  function submitToPreview(e) {
    e.preventDefault();
    if (originalName.value != "" && originalHeight.value != "" && originalLocation.value != "" && originalCreator.value != "" & originalAttribute.value != "") {
      let ulPreview = document.getElementsByClassName("snowman-preview")[0];
      let liPreview = document.createElement("li");
      liPreview.classList.add("snowman-info")
      let articlePreview = document.createElement("article");

      let previewName = document.createElement("p")
      let previewHeight = document.createElement("p")
      let previewLocation = document.createElement("p")
      let previewCreator = document.createElement("p")
      let previewAttribute = document.createElement("p")

      let name = originalName.value;
      let height = originalHeight.value;
      let location = originalLocation.value;
      let creator = originalCreator.value;
      let attribute = originalAttribute.value;

      addBtn.disabled = true;

      previewName.textContent = `Name: ${originalName.value}`;
      previewHeight.textContent = `Height: ${originalHeight.value}`;
      previewLocation.textContent = `Location: ${originalLocation.value}`;
      previewCreator.textContent = `Creator: ${originalCreator.value}`;
      previewAttribute.textContent = `Attribute: ${originalAttribute.value}`;

      ulPreview.appendChild(liPreview);
      liPreview.appendChild(articlePreview);
      articlePreview.appendChild(previewName);
      articlePreview.appendChild(previewHeight)
      articlePreview.appendChild(previewLocation)
      articlePreview.appendChild(previewCreator)
      articlePreview.appendChild(previewAttribute)

      let btnContainer = document.createElement("div");
      btnContainer.classList.add("btn-container");
      liPreview.appendChild(btnContainer);

      originalName.value = "";
      originalHeight.value = "";
      originalLocation.value = "";
      originalCreator.value = "";
      originalAttribute.value = "";

      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.classList.add("edit-btn")
      btnContainer.appendChild(editBtn);

      editBtn.addEventListener("click", backToEdit);

      function backToEdit(e) {
        addBtn.disabled = false;
        btnContainer.remove();
        liPreview.remove();

        originalName.value = name;
        originalHeight.value = height;
        originalLocation.value = location;
        originalCreator.value = creator;
        originalAttribute.value = attribute;
      }

      let nextBtn = document.createElement("button");
      nextBtn.textContent = "Next";
      nextBtn.classList.add("next-btn")
      btnContainer.appendChild(nextBtn);

      nextBtn.addEventListener("click", toSnowmanContent);

      function toSnowmanContent(e) {
        let ulFinal = document.getElementsByClassName("snow-list")[0];
        let liFinal = document.createElement("li");
        liFinal.classList.add("snowman-content")
        let articleFinal = document.createElement("article");

        let finalName = document.createElement("p")
        let finalHeight = document.createElement("p")
        let finalLocation = document.createElement("p")
        let finalCreator = document.createElement("p")
        let finalAttribute = document.createElement("p")

        finalName.textContent = `Name: ${name}`;
        finalHeight.textContent = `Height: ${height}`;
        finalLocation.textContent = `Location: ${location}`;
        finalCreator.textContent = `Creator: ${creator}`;
        finalAttribute.textContent = `Attribute: ${attribute}`;

        ulFinal.appendChild(liFinal);
        liFinal.appendChild(articleFinal);

        articleFinal.appendChild(finalName);
        articleFinal.appendChild(finalHeight);
        articleFinal.appendChild(finalLocation);
        articleFinal.appendChild(finalCreator);
        articleFinal.appendChild(finalAttribute);

        let sendBtn = document.createElement("button");
        sendBtn.textContent = "Send";
        sendBtn.classList.add("send-btn")
        articleFinal.appendChild(sendBtn);
        btnContainer.remove();
        liPreview.remove();

        sendBtn.addEventListener("click", finalPage);

        function finalPage(e) {
          let hero = document.getElementById("hero");
          let body = document.getElementsByClassName("body")[0];
          hero.remove();
          let image = document.getElementById("back-img");
          image.hidden = false;
          let backBtn = document.createElement("button");
          backBtn.textContent = "Back";
          backBtn.classList.add("back-btn")
          body.appendChild(backBtn);

          backBtn.addEventListener("click", rel);

          function rel(e) {
            window.location.reload(true);
          }
        }
      }

    }


  }
}
