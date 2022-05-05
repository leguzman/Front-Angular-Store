import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ProductosService } from "../productos.service";

@Component({
  selector: "app-rebajas",
  templateUrl: "./rebajas.component.html",
  styleUrls: ["./rebajas.component.css"],
})
export class RebajasComponent implements OnInit {
  FormGroup: any;
  guardarPressed: boolean;

  constructor(
    private productosService: ProductosService,
    private formBuilder: FormBuilder
  ) {
    this.FormGroup = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      celular: ["", Validators.required],
      ciudad: ["", Validators.required],
    });
  }

  ngOnInit(): void {}
  create() {
    this.guardarPressed = true;
    if (this.FormGroup.valid) {
      let data: any;
      data = {
        email: this.FormGroup.get("email").value,
        celular: this.FormGroup.get("celular").value,
        ciudad: this.FormGroup.get("ciudad").value,
      };
      this.productosService.create(data).subscribe(
        (res) => {
          console.log(res);
          alert("Registro Exitoso!");
        },
        (error) => {
          alert("Error!");
        }
      );
    } else return;
  }
}
