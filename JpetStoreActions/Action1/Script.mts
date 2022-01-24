Browser("Google").Page("Google_2").Sync
Browser("Google").Navigate "https://petstore.octoperf.com/"
Browser("Google").Page("JPetStore Demo").Link("Enter the Store").Click
Browser("Google").Page("JPetStore Demo_2").Link("Sign In").Click
Browser("Google").Page("JPetStore Demo_4").WebEdit("username").Set "j2ee"
Browser("Google").Page("JPetStore Demo_4").WebButton("Login").Click

