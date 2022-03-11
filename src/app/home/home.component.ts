import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ViewChild, 
  ViewContainerRef, ViewEncapsulation } from '@angular/core';
declare var CKEDITOR: any;
import { FormControl, FormGroup } from '@angular/forms';

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


  constructor() {
    this.myGroup = new FormGroup({
      myckeditor: new FormControl()
    });
   }

   setupCKEditor() {
    var myckeditor = document.getElementById("editor1");
    //myckeditor.style.backgroundColor='yellow';//'rgb(134, 170, 234)';
    myckeditor.style.margin = '0px';
    CKEDITOR.plugins.
      addExternal('autosave', '/assets/autosave/autosave/', 'plugin.js', 'menu');
    CKEDITOR.plugins.
      addExternal('zoom', '/assets/zoom/', 'plugin.js');
    CKEDITOR.plugins.
      addExternal('dropdownmenumanager', '/assets/dropdownmenumanager/', 'plugin.js', 'menu');
    var _this = this;
    this.ckeConfig = {
      //width:this.platform.width(),
      margin: 0,
      //skin:'moono-dark',
      height: 400,//
      resize_enabled: true,
      autosave: {
        //messageType: "none"
        autoLoad: true
      },//dropdownmenumanager
      allowedContent: true,
      removePlugins: 'elementspath,resize',
      extraPlugins: 'divarea,zoom,pagebreak,autosave,dropdownmenumanager',// horizontalrule,
      uiColor: '#1565c0',//'#66AB16'    'blue',//'#696969',//kalo'#808080',
      dropdownmenumanager: {
        'borderMenu': {
          items: [
            {
              name: 'Keng',
              icon: '/assets/no borders.png',
              //label: 'Paste as text',
              command: 'keng',
              
            }, {
              name: 'Lenks',
              icon: '/assets/left border.png',
              //label: 'Paste as text',
              command: 'lenks',
              
            }, {
              name: 'Uewen',
              icon: '/assets/top border.png',
              //label: 'Paste as text',
              command: 'uewen',
              
            }, {
              name: 'Riets',
              icon: '/assets/right border.png',
              //label: 'Label paste',
              command: 'riets',
              
            }, {
              name: 'Ennen',
              icon: '/assets/bottom border.png',
              //label: 'Label paste',
              command: 'ennen',
              
            }, {
              name: 'All',
              icon: '/assets/all borders.png',
              //label: 'Label paste',
              command: 'all',
              
            }],
          label: {
            text: '',
            //iconPath: '/assets/all borders.png',
            width: 45,
            visible: true //default value
          },
          iconPath: '/assets/all borders.png'
        },
        'fontMenu': {
          items: [{
            icon: '',
            name: 'Verdana',
            command: 'font1',
            
          }, {
            name: 'Open Dyslexic',
            icon: '',
            //label: 'Paste as text',
            command: 'font2',
            
          }],
          label: {
            text: '',
            //iconPath: '/assets/all borders.png',
            width: 45,
            visible: true //default value
          },
          iconPath: '/assets/fontMenu.png' //You can use global icons or absolute path to the icon
          //toolbar: 'clipboard', // to specify toolbar group for button
        },
        'lineDistanceMenu': {
          items: [{
            icon: '/assets/line-distance-small.png',
            name: '1',
            command: 'lineDistance1',
            
          }, {
            name: ' 1.5 ',
            icon: '/assets/line-distance-medium.png',
            //label: 'Paste as text',
            command: 'lineDistance2',
            
          }, {
            name: '  2',
            icon: '/assets/line-distance-big.png',
            //label: 'Label paste',
            command: 'lineDistance3',
            
          }],
          label: {
            text: '',
            //iconPath: '/assets/all borders.png',
            width: 45,
            visible: true //default value
          },
          iconPath: '/assets/line-distance-big.png' //You can use global icons or absolute path to the icon
          //toolbar: 'clipboard', // to specify toolbar group for button
        }
      },
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

  ngOnInit() {}

}
