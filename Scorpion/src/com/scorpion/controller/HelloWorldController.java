/**
 * Scorpion
 */

package com.scorpion.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * This controller for test
 * @author Jay
 *
 */
@Controller
public class HelloWorldController
{
	@RequestMapping("/helloWorld")
	public @ResponseBody
	String helloWorld()
	{

		return "Hello World";
	}
}
