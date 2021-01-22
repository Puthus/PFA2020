package iir5.pfa.g7.controllers.response;

public class ResponseMessage {
	private String message;
	private String token;

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public ResponseMessage(String message,String token) {
		this.message = message;
		this.token = token;
	}
	public ResponseMessage(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
