import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { PogPopupService } from './pog-popup.service';

@Component({
  selector: 'pog-popup',
  templateUrl: './pog-popup.component.html',
  styleUrls: ['./pog-popup.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PogPopupComponent implements OnInit {

  constructor(
    private service: PogPopupService,
    private resolver: ComponentFactoryResolver
  ) { }

  @ViewChild("modalPanel",{ read: ViewContainerRef }) entry: ViewContainerRef;

  ngOnInit() {
    this.service.closePipe.subscribe(view=>{
      if(view){
        let q=this.entry.indexOf(view);
        this.entry.remove(this.entry.indexOf(view));
        
      }
    });
    this.service.modalPipe.subscribe(modalData=>{
      if(modalData){
       
        let factory = this.resolver.resolveComponentFactory(modalData.component);;
        let componentRef=factory.create(this.entry.parentInjector);

        //option
        for(let key in modalData.option){
          componentRef.instance[key]=modalData.option[key];          
        }

        //modalData handler
        componentRef.instance["modalData"] = modalData;  


        modalData.view=componentRef.hostView;
        let q=this.entry.insert(modalData.view);

        
      }
    });
  }

}
