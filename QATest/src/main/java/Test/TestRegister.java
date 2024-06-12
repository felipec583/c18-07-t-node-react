package Test;

import org.junit.After;
import org.junit.Test;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;


import static org.junit.Assert.assertEquals;


public class TestRegister {
    private WebDriver driver;

    @Before
    public void setUp() {
        // Configurar el path al driver (cambia el path según donde esté tu driver)
        System.setProperty("webdriver.chrome.driver","C:\\Users\\ferrd\\Documents\\Disco\\Prueba_Maven\\Test1\\src\\main\\resources\\maven\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void testPageRegister() {

        // Navegar a la página deseada
        driver.get("https://c18-07-t-node-react.onrender.com/");

        driver.manage().window().maximize();

        //Definicion de variables
        // Obtener el título de la página
        //WebElement actualTitle = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div[1]"));

        // Definir el título esperado
        //String expectedTitle = "¿Cuál va a ser tu próxima lectura?";

        //Declaracion de xpath para Crear Cuenta
        WebElement xpathBTNC_Cuenta = driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[2]/button[1]"));

        //Hacer click en boton crear cuenta
        xpathBTNC_Cuenta.click();

        //declaracion de xpath para Crear Cuenta
       // WebElement xpathTituloC_Cuenta = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/div[1]/p"));

        // Definicion del título esperado en pagina registro
        //String expectedTitle = "Crea una cuenta para poder comenzar";

        //Declaracion de xpath para Boton Crear Cuenta
        WebElement xpathBTN_Crear = driver.findElement(By.xpath("//*[@id=\"basic\"]/div[4]/div/div/div/div/button"));

        //declaracion de xpath para Input Usuario
        WebElement xpathUsuario = driver.findElement(By.xpath("//*[@id=\"basic_username\"]"));

        //declaracion de xpath para Input Email
        WebElement xpathEmail = driver.findElement(By.xpath("//*[@id=\"basic_email\"]"));

        //declaracion de xpath para Input Contraseña
        WebElement xpathContrasenia = driver.findElement(By.xpath("//*[@id=\"basic_password\"]"));

        //Ingresar Nombre de Usuario
        xpathUsuario.sendKeys("Fernando");

        //Ingresar Email del Usuario
        xpathEmail.sendKeys("ferrdel@hotmail.com");

        //Ingresar Contraseña de Usuario
        xpathContrasenia.sendKeys("");

        //Realizar Click BTN Crear Cuenta del Registro
        xpathBTN_Crear.click();


        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
/*
        try {
            // Usar assertEquals para comparar el título actual con el esperado
            assertEquals("El TITULO de la página esperado", expectedTitle, xpathTituloC_Cuenta.getText());
            // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
            try {
                Thread.sleep(15000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("El TITULO de la página esperado");
        }catch (Exception ex){
            System.out.println("El título de la página no es el esperado: "+ex);
        }*/

    }

    @After
    public void tearDown() {
        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        // Cerrar el navegador
        if (driver != null) {
            driver.quit();
        }
    }


}
