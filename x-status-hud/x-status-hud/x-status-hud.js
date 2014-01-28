/* x-status-hud */

(function(){

  function updateSize(el) {
    var oWidth = el.offsetWidth;
    el.xtag.img.style.borderWidth = oWidth * 0.1 + 'px';
    el.xtag.textEl.style.lineHeight = oWidth + 'px';
    el.style.fontSize = oWidth + 'px';
  }

  var emptyGif = 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

  xtag.register('x-status-hud', {
    lifecycle: {
      created: function(){
        this.xtag.textEl = document.createElement('b');
        this.xtag.img = document.createElement('img');
        this.xtag.img.src = emptyGif;
        this.appendChild(this.xtag.img);
        this.appendChild(this.xtag.textEl);
        updateSize(this);
      },

      inserted: function() {
        updateSize(this);

      }
    },

    methods: {
      toggle: function(){
        this.visible = this.visible ? false : true;
      },

      show: function (){
        this.visible = true;
      },

      hide: function (){
        this.visible = false;
      }
    },

    accessors: {
      visible: {
        attribute: { boolean: true }
      },

      label: {
        attribute: {},

        set: function(text) {
          this.xtag.textEl.innerHTML = text;
        }
      },

      src: {
        attribute: {
          property: 'img'
        },

        set: function(src) {
          if (!src) {
            this.xtag.img.src = emptyGif;
          }
        }
      }
    }
  }); // End tag declaration
})();
