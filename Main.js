
  let selectedRegion = "";

  const regionLinks = {
    R18: [
      "https://https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region1.example.com/intranet",
      "https://region1.example.com/jurisevolution",
      "https://region1.example.com/plateforme",
      "https://region1.example.com/sharepoint"
    ],
    R80: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region2.example.com/intranet",
      "https://region2.example.com/jurisevolution",
      "https://region2.example.com/plateforme",
      "https://region2.example.com/sharepoint"
    ],
    R81: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region3.example.com/intranet",
      "https://region3.example.com/jurisevolution",
      "https://region3.example.com/plateforme",
      "https://region3.example.com/sharepoint"
    ],
    R82: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
    R84: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R85: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R86: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R87: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R88: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R89: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R90: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ],
      R95: [
      "https://www.bing.com/search?q=color%20css&FORM=ARPSEC&PC=ARPL&PTAG=30532142",
      "https://region4.example.com/intranet",
      "https://region4.example.com/jurisevolution",
      "https://region4.example.com/plateforme",
      "https://region4.example.com/sharepoint"
    ]
  };

  function updateLinks(region) {
    selectedRegion = region;
    const links = regionLinks[region];
    if (links) {
      document.getElementById("link1").href = links[0];
      document.getElementById("link2").href = links[1];
      document.getElementById("link3").href = links[2];
      document.getElementById("link4").href = links[3];
      document.getElementById("link5").href = links[4];
      document.getElementById("error-message").style.display = "none";
    }
  }

  function checkRegion(event) {
    if (!selectedRegion) {
      event.preventDefault();
      document.getElementById("error-message").style.display = "block";
      return false;
    }
    return true;
  }
