import { Component, ElementRef, Input, ViewChild } from '@angular/core';

import { HomeComponent } from '../home.component';
import { LogService } from '../../../core/logger/log.service';

@Component({
    selector: 'app-home-qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['../home.component.css']
})

export class QrCodeComponent {
    title = 'udon-front-qr';
    
    @Input() data:any;

    public cryptoData:any;

    constructor(
        private logger: LogService,
        private homeComponent: HomeComponent
    ) { 
        this.cryptoData = this.homeComponent.cryptoData;
    }

    @ViewChild('btc_qrview') btc_qrview!: ElementRef;
    @ViewChild('btc_qrhide') btc_qrhide!: ElementRef;
    @ViewChild('btc_overlay') btc_overlay!: ElementRef;
  
    @ViewChild('btc_addrcp') btc_addrcp!: ElementRef;
    @ViewChild('btc_address_id') btc_address_id!: ElementRef;

    ngAfterViewInit() {
        // show QR code
        let showqr = this.btc_qrview.nativeElement;
        let hideqr = this.btc_qrhide.nativeElement;
        let overlay = this.btc_overlay.nativeElement;
    
        hideqr.style.display = "none";
        showqr.onclick = () => {
            overlay.style.opacity = 0;
            hideqr.style.display = "block";
        }
        
        hideqr.onclick = () => {
            hideqr.style.display = "none";
            overlay.style.opacity = 1;
        }
    
        // copy to clipboard
        let copyText = this.btc_addrcp.nativeElement;
        let address = this.btc_address_id.nativeElement;
        copyText.onclick = () => {
    
            const el = document.createElement("textarea");
            el.value = address.innerHTML;
            document.body.appendChild(el);
            el.select();
            
            try {
                var successful = document.execCommand("copy");
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('"'+address.innerHTML+'"' +' copied to clipboard');
            } catch (err) {
                alert('Oops, unable to copy');
            }
    
            document.body.removeChild(el);
    
        }
    }

    ngOnInit() {
        this.logger.debug(this.title + " component started");
        this.logger.debug(this.title + " component finished");
    }
}