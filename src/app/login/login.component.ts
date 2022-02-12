import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	password: FormControl = new FormControl("", [Validators.required]);
	email: FormControl = new FormControl("", [
		Validators.required,
		Validators.email
	]);
	honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
	submitted: boolean = false; // show and hide the success message
	isLoading: boolean = false; // disable the submit button if we're loading
	responseMessage: string; // the response message to show to the user
	constructor(private formBuilder: FormBuilder, private http: HttpClient) {
		this.form = this.formBuilder.group({
			email: this.email,
			password: this.password,
			honeypot: this.honeypot
		});
	}

	onSubmit() {
		if (this.form.status == "VALID" && this.honeypot.value == "") {
			this.form.disable(); // disable the form if it's valid to disable multiple submissions
			// var formData: any = new FormData();
			// formData.append("email", this.form.value["email"]);
			// formData.append("password", this.form.value["password"]);
			this.isLoading = true; // sending the post request async so it's in progress
			this.submitted = false; // hide the response message on multiple submits
			//
			//WE WILL NEED TO FIX THIS TO SEND TO WECCA LOGISTICS
			//
			this.http
				.post(
					// This will need to be replaced with a DB verification step once a User DB is implemented
					// "https://script.google.com/macros/s/AKfycbwnlE8Im_JZ7Lth6OvxL5kOrie0LgORMOMhaDzKk_dVElBj29o/exec",
					"http://localhost:8080/user/logIn",
					// formData
                    { email: this.form.value["email"], password: this.form.value["password"] }, // pass in the form data
                    { withCredentials: true } // enable writing to cookies
				)
				.subscribe(
					(response) => {
						// choose the response message
						if (response["result"] == "success") {
							this.responseMessage =
								"Thanks for the message! We'll get back to you soon!";
						} else {
							this.responseMessage =
								"Oops! Something went wrong... Reload the page and try again.";
						}
						this.form.enable(); // re enable the form after a success
						this.submitted = true; // show the response message
						this.isLoading = false; // re enable the submit button
						console.log(response);
					},
					(error) => {
						this.responseMessage =
							"Oops! An error occurred... Reload the page and try again.";
						this.form.enable(); // re enable the form after a success
						this.submitted = true; // show the response message
						this.isLoading = false; // re enable the submit button
						console.log(error);
						alert(this.email.value);
					}
				);
		}
	}

	ngOnInit() {}
}
