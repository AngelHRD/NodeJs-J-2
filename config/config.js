function getDescription() {
  // Function réutiliser dans la description de notre site(voir header.html)
  // Bonne pratique pour le CEO
  const date = new Date();
  return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}-This is my awesome app desc`;
}

module.exports = {
  app_title: "My awesome website",
  app_description: getDescription(),
};
