class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      //this.input2 = createInput("Enter Correct Option No..");
      this.input2 = createInput("Enter the Batch name you want get admission for..");
      this.input3 = createInput("Enter you Phone Number...");
      this.input4 = createInput("Enter your address..");
      this.input5 = createInput("Enter your Email...");

      this.button = createButton('Submit');
      this.question = createElement('h1');
      this.message = createElement("h2")
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.input3.hide();
      this.input4.hide();
      this.input5.hide();
      this.message.hide();
    }
  
    display(){
      this.title.html("Welcome to BCASB");
      this.title.position(350, 0);
  
      // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      this.question.html("Admission form for the year 2020-2021");
      // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
  
      this.question.position(250, 80);
  
      this.input1.position(150, 230);
      this.input2.position(150, 280);
      this.input3.position(150, 330);
      this.input4.position(150, 380);
      this.input5.position(150, 430);
      this.button.position(450, 450);
  
      this.button.mousePressed(()=>{
        
         this.message.html("Thank you for registering we will let you know your admission process is completed,<br> till then visit our app Bulabules app on playstore");
         this.message.position(50, 550);
  
        // this.message.html("Thank You, Your Answer Has Been Submitted");
        // this.message.position();
  
        // this.message("Thank You, Your Answer Has Been Submitted");
        // this.message(350, 350);
  
        // this.message.html("Thank You, Your Answer Has Been Submitted");
        // this.message.position(350);
  
  
      });
    }
  }
  