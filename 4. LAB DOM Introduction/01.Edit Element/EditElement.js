function editElement(reference, match, replacer) {
  let asText =reference.textContent;
  let changed = asText.split(match).join(replacer);
  reference.textContent = changed;

}