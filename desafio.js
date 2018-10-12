formulario.addEventListener("onclick",function)




//punto1 
function salariovendedor(){


								let N=parseInt(prompt("introduzca el numero de vendedores"));
								if (isNaN(N))
									alert("Cantidad Invalida");
								else{
								
									
									   for(i=1;i<N;i++){

															const salario_base=500000;
															const comision=200000;
															let vendedor= prompt("Nombre del vendedor "+i+"/"+N+":");
															let nroVehiculos= parseInt(prompt("Numero de autos Vendidos"));
															let valor_de_ventas= parseInt(prompt("Valor total de sus ventas"));

															if  (vendedor==null || vendedor=="")
																	alert("Debe escribir el nombre del vendedor");
															else 
																if (isNaN(nroVehiculos))
																		alert("Cantidad Invalida")
																else 
																	if (isNaN(valor_de_ventas))
																			alert("valor de ventas Invalido");
																	else{
																			var comision1=comision*nroVehiculos;
																			var porcentaje=valor_de_ventas+valor_de_ventas*0.10;
																			var salario_neto=comision1+porcentaje+salario_base;

																			alert("el salario neto del vandedor es: "+salario_neto+" Bs");
																			console.log("PUNTO1");
																			console.log("el vendedor: "+vendedor);
																			console.log("El numero de vehiculos vendidos es: "+nroVehiculos);
																			console.log("tiene un salario base de: "+ salario_base);
																			console.log("el valor total de sus ventas es: "+porcentaje);
																			console.log("con una comision de: "+comision1);
																			console.log("Por lo tanto el salario neto es de: "+salario_neto);

																	    }
												        }
				                    }	    
	                        }
			



// punto 2 
function calcularnota(){ 
	let N=Math.random()*5;
			for(i=1;i<N;i++){


								alert("Ingresar las siguientes notas "+i+"/"+N+" :")
								let exa1= parseInt(prompt("Examen 1 en la escala de 27 pts"));
								let exa2= parseInt(prompt("Examen 2 en la escala de 27 pts"));
								let exa3= parseInt(prompt("Examen 3 en la escala de 27 pts"));
								let evac= parseInt(prompt("Evaluacion Continua en la escala de 9 pts"));
								let trab= parseInt(prompt("Trabajo en la escala de 10 pts"));
								 
								if (isNaN(exa1))
									alert("Nota Invalida");
								else
									if (isNaN(exa2))
										alert("Nota Invalida");
									else
										if (isNaN(exa3))
											alert("Nota Invalida");
										else
											if (isNaN(evac))
												alert("Nota Invalida");
											else
												if (isNaN(trab));
													else
														if (exa1>27 || exa2>27 || exa3>27)
																alert("Introduzca la nota de los examenes en el rango establecido");
																else 
																if (evac>9 || trab>10)
																alert("Debe Introducir la nota en el rango establecido");
															  else {
														

																		let nota_100=exa1+exa2+exa3+evac+trab
																		let nota_20=nota_100/5
																		let nota_4=nota_100/25

																		alert("nota en la escala de 100: "+nota_100.toFixed(1)+"\n"+
																			"nota en la escala de 20: "+nota_20.toFixed(1)+"\n"+
																			"nota en la escala de 4: "+nota_4.toFixed(1));

																		console.log("PUNTO2")
																		console.log("el estudiante tiene las siguientes notas")
																		console.log("en la escala de 100 pts obtuvo: "+nota_100)
																		console.log("en la escala de 20 pts obtuvo: "+nota_20)
																		console.log("en la escala de 4 pts obtuvo: "+nota_4)

																	}
				            }	            				 

                        }
//punto3 
function cuotasmensuales() {
								let N=parseInt(prompt("Cantidad de clientes "));
								if (isNaN(N))
									alert("Cantidad invalida");
								else{
									  for(i=1;i<N;i++) {
															let nombre=prompt("ingresar nombre del cliente "+i+"/"+N+" :");
															let pracio_vehi=parseInt(prompt("Ingresar el precio del vehiculo"));

															if (nombre=="" || nombre==null)
																alert("Debe escribir el nombre del Cliente");
															else 
																if (isNaN(pracio_vehi))
																alert("Precio Invalido");
															else{
																	let cuota_i= pracio_vehi*0.30
																	let cuota_res= pracio_vehi*0.70
																	let cuota_mensual=cuota_res/24

																	alert("El cliente: "+nombre+"\n"+
																		"Debe cancelar una cuota inicial de: "+cuota_i+" Bs"+"\n"+
																		"Las cuotas mensuales seran de: "+cuota_mensual.toFixed(2)+" Bs");
																	console.log("PUNTO3")
																	console.log("el cliente: "+nombre+" debe cancelar una cuota inicial de: "+cuota_i)
																	console.log("debe pagar una cuota consecutiva por dos años de: "+cuota_mensual)


										                        }
							                            }
		                            }
                            }

			
// punto4 
function ingresodía(){
						let N=parseInt(prompt("Ingresar el numero de Dias"));
						if (isNaN(N))
							alert("Numero Invalido");

						else{ 
								for (i=1;i<N;I++){

								
													alert("Ingresar los siguientes Datos");
													let precio_des= parseInt(prompt("Precio del desayuno?"));
													let precio_al= parseInt(prompt("Precio del almuerzo?"));
													let precio_cen= parseInt(prompt("Precio de la cena?"));
													let cnatidad_des= parseInt(prompt("Cantidad de desayunos vendidos al dia?"));
													let cnatidad_al= parseInt(prompt("Cantidad de almuerzos vendidos al dia?"));
													let cnatidad_cena= parseInt(prompt("Cantidad de cena vendidos al dia?"));

													if (isNaN(precio_des) || isNaN(precio_al) || isNaN(precio_cen))
														alert("Precio invalido");
													else 
														if (isNaN(cnatidad_des) || isNaN(cnatidad_al) || isNaN(cnatidad_cena))
															alert("cantidad invalida");
														else{

																let ingreso_des=precio_des*cnatidad_des
																let ingreso_al=precio_al*cnatidad_al
																let ingreso_cen=precio_cen*cnatidad_cena
																let total_dia=ingreso_des+ingreso_al+ingreso_cen
																let promedio=(precio_des+precio_al+precio_cen)/3
																alert ("El ingreso del dia por las ventas del desayuno: "+ingreso_des.toFixed(2)+" Bs"+"\n"+
																	"Ingreso por las ventas de almuerzo: "+ingreso_al.toFixed(2)+" Bs"+"\n"+
																	"Ingreso por las ventas de cena: "+ingreso_cen.toFixed(2)+" Bs"+"\n"+
																	"Total de ingreso del dia: "+total_dia.toFixed(2)+" Bs"+"\n"+
																	"Promedio de los precios de las comidas: "+promedio.toFixed(2)+" Bs");


																console.log("PUNTO4");
																console.log("el ingreso del kiosco por cada comida es de:");
																console.log(" por el desaluno es de: "+ingreso_des);
																console.log("por el almuerzo es de; "+ingreso_al);
																console.log("por la cena es de: "+ingreso_cen);
																console.log("el total de ingreso al dia es de: "+total_dia);
																console.log("el promedio por los precios de la comida es de: "+promedio);
													        }
												}
			                }
                     }
}