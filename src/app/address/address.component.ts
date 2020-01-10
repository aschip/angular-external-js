import { Component, OnInit } from "@angular/core";

declare var AddressFinder: any;

@Component({
  selector: "app-address",
  templateUrl: "./address.component.html",
  styleUrls: ["./address.component.css"]
})
export class AddressComponent implements OnInit {
  ngOnInit() {
    let script = document.createElement("script");
    script.src = "https://api.addressfinder.io/assets/v3/widget.js";
    script.async = true;
    script.onload = this.initAf;
    document.body.appendChild(script);
  }

  initAf() {
    let widget = new AddressFinder.Widget(
      document.getElementById("addrs"),
      "ADDRESSFINDER_DEMO_KEY",
      "NZ",
      {}
    );
    var vm = this;
    /* widget documentation is here: https://addressfinder.nz/docs/widget_docs/ */
    widget.on("address:select",vm.addressSelected);
      //

    /* this works fine but cannot get angular component inside the function*/
    /*widget.on("result:select", function(fullAddress, metaData) {
      console.log(metaData);
    });*/
  
}

addressSelected = (function(address, metaData) {
    console.log(metaData);
    }).bind(this);
}
