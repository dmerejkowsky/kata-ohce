package info.dmerej;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class GreeterTest {
  @Mock
  SystemClock systemClockMock;
  Greeter greeter;

  @BeforeEach
  public void setUp() {
    systemClockMock = mock(SystemClock.class);
    greeter = new Greeter(systemClockMock);
  }

  @Test
  void nightlyGreeting() {
    // Assert that greeter says "Good night" when current hour is 0 (midnight)
    when(systemClockMock.getCurrentHour()).thenReturn(0);
    assertEquals("Good night", greeter.greet());
  }

  @Test
  void neverAsserts() {
    // Assert that the assertion in greet() is never thrown, by checking all hours from 0 to 23
    int dayToHour = 24;

    for (int i = 0; i < dayToHour; i++) {
      when(systemClockMock.getCurrentHour()).thenReturn(0);
      assertDoesNotThrow(() -> greeter.greet());
    }
  }
}
