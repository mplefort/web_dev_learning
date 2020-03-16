// An adapter patern example
CoffeeMachineInterface.java

public interface CoffeeMachineInterface {
  public void chooseFirstSelection();
  public void chooseSecondSelection();


}


OldCoffeeMachine.java

public class OldCoffeeMachine {
  public void selectA(){
    System.out.println("A - selected");
  }

public void selectB(){
    System.out.println("B - selected");
  }
}






CoffeeTouchscreenAdapter.java

public class CoffeeTouchscreenAdapter implements CoffeeMachineInterface {

    OldCoffeeMachine coffeeMachine;

  public CoffeeTouchScreenAdapter(OldCoffeeMachine newMachine){
    this.coffeeMachine = newMachine;
  }

  public void chooseFirstSelection(){
    coffeeMachine.selectA();
  }

  public void chooseSecondSelection(){
    coffeeMachine.selectB();
  }
}