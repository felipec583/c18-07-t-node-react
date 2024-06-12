package Test;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertEquals;

public class TestPage {
    private WebDriver driver;

    //Ingresar Nombre de Usuario
    String nameUser= "PepeElGrillo";

    //Ingresar Email del Usuario
    String emailUser="pepegrillo2@hotmail.com";

    //Ingresar Contraseña de Usuario
    String passwordUser= "Pepegrillo1357";

    @Before
    public void setUp() {
        // Configurar el path al driver (cambia el path según donde esté tu driver)
        System.setProperty("webdriver.chrome.driver","C:\\Users\\ferrd\\Documents\\Disco\\Prueba_Maven\\Test1\\src\\main\\resources\\maven\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    public void esperaImplicita(){
        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        try {
            Thread.sleep(4500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public void registroUsuario(){
        //REGISTRO DE USUARIO

        //Declaracion de xpath para Crear Cuenta
        WebElement xpathBTNC_Cuenta = driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[2]/button[1]"));

        //Hacer click en boton crear cuenta
        xpathBTNC_Cuenta.click();


        //Declaracion de xpath para Boton Crear Cuenta
        WebElement xpathBTN_Crear = driver.findElement(By.xpath("//*[@id=\"basic\"]/div[4]/div/div/div/div/button"));

        //declaracion de xpath para Input Usuario
        WebElement xpathUsuario = driver.findElement(By.xpath("//*[@id=\"basic_username\"]"));

        //declaracion de xpath para Input Email
        WebElement xpathEmail = driver.findElement(By.xpath("//*[@id=\"basic_email\"]"));

        //declaracion de xpath para Input Contraseña
        WebElement xpathContrasenia = driver.findElement(By.xpath("//*[@id=\"basic_password\"]"));

        //Ingresar Nombre de Usuario
        xpathUsuario.sendKeys(nameUser);

        //Ingresar Email del Usuario
        xpathEmail.sendKeys(emailUser);

        //Ingresar Contraseña de Usuario
        xpathContrasenia.sendKeys(passwordUser);

        //Realizar Click BTN Crear Cuenta del Registro
        xpathBTN_Crear.click();

        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        esperaImplicita();
    }

    public void loginUserName(){
        //Declaracion de xpath para Inicia Sesion
        WebElement xpathBTN_IniciaSes = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/button[2]"));

        sleepCorto();

        //Hacer click en boton crear cuenta
        xpathBTN_IniciaSes.click();

        //Declaracion de xpath para Text Inicia Sesion
        WebElement xpathText_IniciaSes = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/div[1]/p"));

        //declaracion de xpath para Input Nombre de Usuario
        WebElement xpath_UserName = driver.findElement(By.xpath("//*[@id=\"basic_username\"]"));

        //declaracion de xpath para Input Password
        WebElement xpath_Password = driver.findElement(By.xpath("//*[@id=\"basic_password\"]"));

        //Declaracion de xpath para Boton Ingresar
        WebElement xpathBTN_Ingresar = driver.findElement(By.xpath("//*[@id=\"basic\"]/div[3]/div/div/div/div/button"));

        //LOGIN DE USUARIO
        //Ingresar Nombre de Usuario
        xpath_UserName.sendKeys(nameUser);

        //Ingresar Contraseña de Usuario
        xpath_Password.sendKeys(passwordUser);

        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        esperaImplicita();

        //Realizar Click BTN Ingresar Cuenta
        xpathBTN_Ingresar.click();
    }

    public void loginUserGoogle(){
        //bookpalnocountry@gmail.com
        //Bookpal135

        //Declaracion de xpath para Inicia Sesion
        WebElement xpathBTN_IniciaSes = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/button[2]"));

        sleepCorto();

        xpathBTN_IniciaSes.click();

        sleepCorto();

        //Declaracion de xpath Iniciar Sesion con Google
        WebElement xpathBTN_Google = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div/div[3]/button"));

        sleepCorto();

        xpathBTN_Google.click();

        sleepCorto();
        insertGoogle();
    }

    public void insertGoogle(){

        WebDriverWait wait = new WebDriverWait(driver, 20);

        try{
            // Espera y cambia al popup de Google
            String originalWindow = driver.getWindowHandle();
            for (String windowHandle : driver.getWindowHandles()) {
                if (!originalWindow.contentEquals(windowHandle)) {
                    driver.switchTo().window(windowHandle);
                    break;
                }
            }

            // Introduce el email
            WebElement emailField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("identifierId")));
            emailField.sendKeys("bookpalnocountry@gmail.com");

            // Haz clic en el botón siguiente
            WebElement nextButton = driver.findElement(By.id("identifierNext"));
            nextButton.click();

            // Introduce la contraseña
            WebElement passwordField = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]/div[1]/div/div[1]/input")));
            passwordField.sendKeys("Bookpal135");

            // Haz clic en el botón siguiente
            WebElement passwordNextButton = driver.findElement(By.xpath("//*[@id=\"passwordNext\"]/div/button"));
            passwordNextButton.click();

            sleepCorto();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void pageDescubrir(){
        // Scroll de la pagina
        JavascriptExecutor jse = (JavascriptExecutor) driver;

        //Declaracion xpathBTN descubrir
        WebElement xpathOpcDesc = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/button[1]"));

        xpathOpcDesc.click();

        esperaImplicita();

        //Declaracion de xpath de la ubicacion del libro
        WebElement xpathFiccion = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div[4]/div/div"));

        //Declaracion de xpath del libro
        WebElement xpathClickLibro= driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/div[5]/div[1]/div[1]/img"));

        //Espera para hacer el Scroll
        esperaImplicita();

        jse.executeScript("arguments[0].scrollIntoView(true);", xpathFiccion);

        //Realizar Click en el libro
        xpathClickLibro.click();

    }

    public void cerrarSesion(){
        //Declaracion xpath de opc perfil
        WebElement xpathOpcPerfil= driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/div/button/img"));

        xpathOpcPerfil.click();

        //Declaracion xpath de opc perfil
        WebElement xpathBTNSalir= driver.findElement(By.xpath("//*[@id=\"account-menu\"]/div[3]/ul/li[2]"));

        esperaImplicita();

        xpathBTNSalir.click();
    }

    public void sleepCorto(){
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }

    public void scrollPage(){
        // Scroll de la pagina principal
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,-350)");
        jse.executeScript("window.scrollBy(0,-350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,-350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,-350)");
        sleepCorto();
        jse.executeScript("window.scrollBy(0,-350)");
    }

    public void verBiblioteca(){
        // Scroll de la pagina principal
        JavascriptExecutor jse2 = (JavascriptExecutor) driver;
        //Declaracion de xpath de Biblioteca
        WebElement xpathBTNBiblioteca= driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div[2]/button[2]"));

        //Scroll hacia arriba
        jse2.executeScript("arguments[0].scrollIntoView(true);", xpathBTNBiblioteca);

        //Click en BTN TuBiblioteca
        xpathBTNBiblioteca.click();
    }

    @Test
    public void testPageRegister() {

        // Navegar a la página deseada
        driver.get("https://c18-07-t-node-react.vercel.app/");

        driver.manage().window().maximize();
        // Scroll de la pagina principal
        JavascriptExecutor jse2 = (JavascriptExecutor) driver;

        sleepCorto();

        //Lamada al tregistro de usuario
        registroUsuario();

        //Llamada al metodo Login con username
        loginUserName();

        sleepCorto();

        scrollPage();

        pageDescubrir();

        sleepCorto();

        verBiblioteca();

        sleepCorto();

        cerrarSesion();

        sleepCorto();
    }

    @Test
    public void testRegisterGoogle(){

        // Navegar a la página deseada
        driver.get("https://c18-07-t-node-react.vercel.app/");

        driver.manage().window().maximize();

        //Llamada al metodo Login con Google
        loginUserGoogle();

        sleepCorto();

        scrollPage();

        pageDescubrir();

        // Espera para ver el resultado de la búsqueda (usar explícitamente para fines de demostración)
        esperaImplicita();

        verBiblioteca();

        esperaImplicita();

        cerrarSesion();

        esperaImplicita();
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
