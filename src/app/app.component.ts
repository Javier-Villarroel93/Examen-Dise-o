import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Importar los módulos necesarios

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Propiedad profileForm correctamente declarada como opcional y inicializada
  profileForm!: FormGroup;

  // Carrusel de imágenes
  images: string[] = [
    'https://i.pinimg.com/736x/6c/fe/ef/6cfeef1f897a2ddcd186f01fab4ab879.jpg',
    'https://i.pinimg.com/736x/f3/d6/cf/f3d6cf6c893260907dcfaa41032bf6df.jpg',
    'https://i.pinimg.com/736x/c7/16/a4/c716a492b7da6497ef7849d258e950a0.jpg',
    'https://i.pinimg.com/736x/0f/4d/30/0f4d30c36aaa519d7ac1f938aae32e9a.jpg',
    'https://i.pinimg.com/736x/32/a8/1c/32a81ced68a9834a0124508aad1b5389.jpg',
    'https://i.pinimg.com/736x/e0/50/35/e05035e9b520358d64164c91871f177d.jpg'
  ];

  // Opciones de carrusel para adaptarse a diferentes tamaños de pantalla
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '480px', numVisible: 1, numScroll: 1 }
  ];

  // Inyectar FormBuilder para crear el formulario
  constructor(private fb: FormBuilder) {}

  // Inicializar el formulario con los controles
  ngOnInit() {
    // Aquí inicializamos el formulario
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue] // Checkbox con validación
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.profileForm.valid) {
      console.log("Formulario enviado:", this.profileForm.value);
    } else {
      console.log("Formulario inválido");
    }
  }
}
