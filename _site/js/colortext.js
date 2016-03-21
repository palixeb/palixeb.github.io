  
     /* origial code */
/*
     $(function()
     {
      var text = $('.test1').text();
      var atext = text.split("");
      var newText = '';
      for(var i=0; i< atext.length; i++)
      {
        newText += '<span class = "test1">' + atext[i]+'</span>';
      }
      $('.test1').html(newText);
    });

     
  */
     /* color for headings can be used multiple times */

   $(function() {
  var texts = $('.heading-dia');
  texts.each(function(i) {
    var $el = $(this);
    var text = $el.text();
    var atext = text.split("");
    var newText = '';
    for (var i = 0; i < atext.length; i++) {
      newText += '<span class = "heading-dia">' + atext[i] + '</span>';
    }
    $el.html(newText);
  });
});

  $(function() {
  var texts = $('.test1');
  texts.each(function(i) {
    var $el = $(this);
    var text = $el.text();
    var atext = text.split("");
    var newText = '';
    for (var i = 0; i < atext.length; i++) {
      newText += '<span class = "test1">' + atext[i] + '</span>';
    }
    $el.html(newText);
  });
});

    $(function() {
  var texts = $('.test2');
  texts.each(function(i) {
    var $el = $(this);
    var text = $el.text();
    var atext = text.split("");
    var newText = '';
    for (var i = 0; i < atext.length; i++) {
      newText += '<span class = "test2">' + atext[i] + '</span>';
    }
    $el.html(newText);
  });
});

      $(function() {
  var texts = $('.test9');
  texts.each(function(i) {
    var $el = $(this);
    var text = $el.text();
    var atext = text.split("");
    var newText = '';
    for (var i = 0; i < atext.length; i++) {
      newText += '<span class = "test9">' + atext[i] + '</span>';
    }
    $el.html(newText);
  });
});

/* can only be used once but allows tags */
    $(function() {
  function spammify(node) {
    var children = node.childNodes;
    var replaced = node.cloneNode();
    replaced.innerHTML = "";
    
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      
     
      if (child.nodeType === 1) {
        replaced.appendChild(spammify(child));
      }
    
      else if (child.nodeType === 3) {
        var letters = child.textContent;
        
        for (var j = 0; j < letters.length; j++) {
          var span = document.createElement("SPAN");
          var text = document.createTextNode(letters[j]);
          span.className = "apparatus";
          span.appendChild(text);
          replaced.appendChild(span);
        }
      }
    }
    
    return replaced;
  }
  
  var text = document.querySelector('.apparatus');
  text.innerHTML = spammify(text).innerHTML;
});

     $(function() {
  function spammify(node) {
    var children = node.childNodes;
    var replaced = node.cloneNode();
    replaced.innerHTML = "";
    
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      
     
      if (child.nodeType === 1) {
        replaced.appendChild(spammify(child));
      }
    
      else if (child.nodeType === 3) {
        var letters = child.textContent;
        
        for (var j = 0; j < letters.length; j++) {
          var span = document.createElement("SPAN");
          var text = document.createTextNode(letters[j]);
          span.className = "arp87";
          span.appendChild(text);
          replaced.appendChild(span);
        }
      }
    }
    
    return replaced;
  }
  
  var text = document.querySelector('.arp87');
  text.innerHTML = spammify(text).innerHTML;
});

$(function() {
  function spammify(node) {
    var children = node.childNodes;
    var replaced = node.cloneNode();
    replaced.innerHTML = "";
    
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      
     
      if (child.nodeType === 1) {
        replaced.appendChild(spammify(child));
      }
    
      else if (child.nodeType === 3) {
        var letters = child.textContent;
        
        for (var j = 0; j < letters.length; j++) {
          var span = document.createElement("SPAN");
          var text = document.createTextNode(letters[j]);
          span.className = "snr24";
          span.appendChild(text);
          replaced.appendChild(span);
        }
      }
    }
    
    return replaced;
  }
  
  var text = document.querySelector('.snr24');
  text.innerHTML = spammify(text).innerHTML;
});