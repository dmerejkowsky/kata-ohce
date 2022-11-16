package info.dmerej;

public class Greeter {
  private final SystemClock clock;

  public Greeter() {
    this.clock = new SystemClock();
  }

  public Greeter(SystemClock systemClock) {
    this.clock = systemClock;
  }

  public String greet() {
    int currentHour = clock.getCurrentHour();
    if (currentHour >= 6 && currentHour < 12) {
      return "Good morning";
    }
    if (currentHour >= 12 && currentHour <= 19) {
      return "Good afternoon";
    }
    // Fun fact: On my machine, IntelliJ thinks this is always true
    // Is it right?
    if (currentHour >= 20 || currentHour < 6) {
      return "Good night";
    }

    throw new AssertionError(String.format("%d hour was not handled", currentHour));
  }

}
