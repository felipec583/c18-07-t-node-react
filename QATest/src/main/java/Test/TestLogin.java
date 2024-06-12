package Test;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestLogin {
    private WebDriver driver;

    @Before
    public void setUp() {
        // Configurar el path al driver (cambia el path según donde esté tu driver)
        System.setProperty("webdriver.chrome.driver","C:\\Users\\ferrd\\Documents\\Disco\\Prueba_Maven\\Test1\\src\\main\\resources\\maven\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Test
    public void testPageLogin() {

        // Navegar a la página deseada
        driver.get("https://c18-07-t-node-react.onrender.com/");

        driver.manage().window().maximize();

        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        try {
            Thread.sleep(15000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        //Declaracion de xpath para Inicia Sesion
        WebElement xpathBTN_IniciaSes = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/button[2]"));

        //Hacer click en boton crear cuenta
        xpathBTN_IniciaSes.click();

        //Declaracion de xpath para Text Inicia Sesion
        WebElement xpatText_IniciaSes = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/div[1]/p"));

        //declaracion de xpath para Input Nombre de Usuario
        WebElement xpath_UserName = driver.findElement(By.xpath("//*[@id=\"basic_username\"]"));

        //declaracion de xpath para Input Password
        WebElement xpath_Password = driver.findElement(By.xpath("//*[@id=\"basic_password\"]"));

        //Declaracion de xpath para Boton Ingresar
        WebElement xpathBTN_Ingresar = driver.findElement(By.xpath("//*[@id=\"basic\"]/div[3]/div/div/div/div/button"));


        //Ingresar Nombre de Usuario
        xpath_UserName.sendKeys("Fernando");

        //Ingresar Contraseña de Usuario
        xpath_Password.sendKeys("");

        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        try {
            Thread.sleep(15000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        //Realizar Click BTN Ingresar Cuenta
        xpathBTN_Ingresar.click();

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
