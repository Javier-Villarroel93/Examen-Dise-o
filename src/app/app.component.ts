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
    'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2014/12/ps20_evolucion.png?fit=640%2C360&ssl=1',
    'https://www.muycomputer.com/wp-content/uploads/2013/08/evoluci%C3%B3n-gr%C3%A1fica-ps1-ps4-portada-img312-630x450.jpg',
    'https://media.istockphoto.com/id/515736178/es/foto/playstation-2-extraplano-consola-de-juegos.jpg?s=612x612&w=0&k=20&c=eujKzYDdos5mo7EjJd8llgLFlhhM3iFlNRvGbw2k4Dg=',
    'https://guide-images.cdn.ifixit.com/igi/YHimxLG2QHJbKf1S.large',
    'https://www.repuestosfuentes.es/99038-large_default/consola-sony-playstation-ps4-pro-1tb-muy-buen-estado.jpg',
    'https://mobilestore.ec/wp-content/uploads/2023/12/PlayStation-5-Slim-Mobile-Store-Ecuador1.jpg'
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
