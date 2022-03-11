import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ViewChild, 
  ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
declare var CKEDITOR: any;
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  @ViewChild("editor1", null) myckeditor: any;
  ckEditorInstance: any;
  myGroup: any;
  neoLineDistanceClass = 'cke_menubutton__1';
  neoFontSizeClass = 'cke_menubutton__12pt';//;'cke_menubutton__12pt';
  neoFontClass = 'cke_menubutton__Verdana';//;'cke_menubutton__12pt';

  constructor() {
    this.myGroup = new FormGroup({
      myckeditor: new FormControl()
    });
   }

   onReady(event){
    let ckeditor = event.editor;
    this.ckEditorInstance = ckeditor;
    var _this = this;
    ckeditor.on('menuShow', function (event) {
      var $iframe = event.data[0].element.$.firstElementChild;
      var innerDoc = $iframe.contentDocument ? $iframe.contentDocument :
        $iframe.contentWindow.document;
      var css = document.createElement("style");
      css.innerHTML = "  .cke_menubutton:focus { background-color: unset;}" +
        ".cke_menubutton_on { background-color: lightgreen !important; }" +
        ".optionIsActive { background-color: green !important; }";
      innerDoc.body.appendChild(css);
      //font size dropdownmenu 
      var $elem = <HTMLElement>innerDoc.
        getElementsByClassName(_this.neoFontSizeClass)[0]; // Find the selected font element
      if ($elem) { // If the element exists...
        $elem.classList.add('cke_menubutton_on'); // set it to 'on'
      }
      //font name dropdownmenu 
      var $elem = <HTMLElement>innerDoc.
        getElementsByClassName(_this.neoFontClass)[0]; // Find the selected font element
      if ($elem) { // If the element exists...
        $elem.classList.add('cke_menubutton_on'); // set it to 'on'
      }
      //line distance dropdownmenu 
      var $elem = <HTMLElement>innerDoc.
        getElementsByClassName(_this.neoLineDistanceClass)[0]; // Find the selected distance element
      if ($elem) { // If the element exists...
        $elem.classList.add('cke_menubutton_on'); // set it to 'on'
      }
      //innerDoc.getElementsByClassName('cke_menubutton')[1].
      //style.backgroundColor='red';
      for (var elem of
        innerDoc.getElementsByClassName('cke_menubutton')) {
        //elem.style.backgroundColor='white';
        //document.getElementsByClassName('cke_menubutton')[0].style.
        //backgroundColor='green' ;
      }
      //second child
      //var secondItem= event.data[0].element.$.children[1];
    });
   }
   setupCKEditor() {
    var myckeditor = document.getElementById("editor1");
    //myckeditor.style.backgroundColor='yellow';//'rgb(134, 170, 234)';
    myckeditor.style.margin = '0px';
    //CKEDITOR.plugins.
    //  addExternal('autosave', '/assets/autosave/autosave/', 'plugin.js', 'menu');
    //CKEDITOR.plugins.
    //  addExternal('zoom', '/assets/zoom/', 'plugin.js');
    //CKEDITOR.plugins.
    //  addExternal('dropdownmenumanager', '/assets/dropdownmenumanager/', 'plugin.js', 'menu');
    var _this = this;
    this.ckeConfig = {
      //width:this.platform.width(),
      margin: 0,
      //skin:'moono-dark',
      height: 1000,//
      resize_enabled: true,
      allowedContent: true,
      uiColor: '#1565c0',//'#66AB16'    'blue',//'#696969',//kalo'#808080',
      toolbarGroups: [{
        "name": "basicstyles",
        "items": "changeColorButton",
        "groups": ['openMenuButton', "basicstyles",
          'rbChangeColorButton', 'rgbChangeColorButton',
          "borderMenu", "fontMenu", "fontSizeMenu",
          "lineDistanceMenu", 'colorNumbersButton',
        ],
      }],
      toolbar: [
        //Scayt, 'Find', 'Replace', 'SelectAll'] },
        {
          name: 'basicstyles',
          items: ['openMenu', 'Bold', 'Italic',
            'rbChangeColorButton', 'rgbChangeColorButton',
            "borderMenu", "fontMenu", "fontSizeMenu",
            "lineDistanceMenu", 'colorNumbersButton',
          ]
        }, '/',
      ]
    }
   }

  //CKEditor methods
  showSelectedOption(currentClassName, currentEditor, currentCommand, menuType) {
    var $iframe = <HTMLIFrameElement>
      document.getElementsByClassName('cke_panel_frame')[0];
    var innerDoc = $iframe.contentDocument ?
      $iframe.contentDocument : $iframe.contentWindow.document;
    var $elem = <HTMLElement>innerDoc.getElementsByClassName(
      currentClassName)[0];
    $elem.classList.add("optionIsActive");

    //$elem.style.backgroundColor='red';

    var command = currentEditor.getCommand(currentCommand);
    command.toggleState();

  }

  ngOnInit() {
    this.setupCKEditor();
  }

}
