window.onscroll = function() {
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  };

  