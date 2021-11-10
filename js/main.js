const view_btn = Array.from(document.getElementsByClassName("btn-view-more"));

view_btn.map((b) => {
  b.addEventListener("click", (e) => {
    document
      .querySelector(`#invis-${e.target.dataset.id} `)
      .classList.toggle("d-none");
  });
});

document.querySelector("#search").addEventListener("keyup", (e) => {
  const list_id = document.querySelectorAll("span[data-id]");

  document.querySelectorAll('.Shipmts-row').forEach(rows =>{
    rows.classList.add('d-none');
})

  list_id.forEach((lis) => {
      const shipments = document.querySelectorAll("div.row[data-id]");
   
 shipments.forEach((s) => {
        if (s.dataset.id.includes(e.target.value))
          s.classList.remove("d-none");
      });
    document.querySelectorAll('#list-display').forEach(rows =>{
        rows.classList.remove('d-none')
    });
  });
});
